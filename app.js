import workoutList from './workoutList.js';

window.addEventListener('load', async function () {
  let currentIndex = 0;
  let state = 'Play'; // Initial state
  let countdownInterval;
  let timeLeft = 0;
  let voice;

  let audioContext;

  // The wake lock sentinel.
  let wakeLock = null;

  // Function that attempts to request a screen wake lock.
  const requestWakeLock = async () => {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => {
        console.log('Screen Wake Lock released:', wakeLock.released);
      });
      console.log('Screen Wake Lock released:', wakeLock.released);
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  };

  function updateCountdown(seconds) {
    document.getElementById('countdown').innerText = `${seconds}s`;
  }

  function updateCurrentExercise(message) {
    document.getElementById('currentExercise').innerText = `${message}`;
  }

  const voiceSelect = document.getElementById('voiceSelect');

  function populateVoiceList() {
    const voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  function saveSelectedVoice() {
    const selectedVoice = voiceSelect.value;
    localStorage.setItem('selectedVoice', selectedVoice);
  }

  function getSavedVoice() {
    return localStorage.getItem('selectedVoice');
  }

  function applySavedVoice() {
    const savedVoice = getSavedVoice();
    if (savedVoice) {
      voiceSelect.value = savedVoice;
      voice = window.speechSynthesis.getVoices().find((v) => v.name === savedVoice);
    }
  }

  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  applySavedVoice();

  voiceSelect.addEventListener('change', function () {
    const selectedVoice = voiceSelect.value;
    voice = window.speechSynthesis.getVoices().find((v) => v.name === selectedVoice);
    if (voice) {
      speakMessage('Тестування голосу.', voice);
      saveSelectedVoice();
    }
  });

  function speakMessage(message) {
    const messageUtterance = new SpeechSynthesisUtterance(message);
    messageUtterance.voice = voice;
    window.speechSynthesis.speak(messageUtterance);
  }

  function toggleState() {
    if (state === 'Play') {
      requestWakeLock();
      startWorkout();
    } else if (state === 'Pause') {
      pauseWorkout();
    } else if (state === 'Continue') {
      continueWorkout();
    }
  }

  function startWorkout() {
    if(!audioContext){
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    state = 'Pause';
    document.getElementById('playPauseButton').innerText = 'Pause';
    speakNextWithDelay();
  }

  function pauseWorkout() {
    state = 'Continue';
    document.getElementById('playPauseButton').innerText = 'Continue';
    clearInterval(countdownInterval);
  }

  function continueWorkout() {
    state = 'Pause';
    document.getElementById('playPauseButton').innerText = 'Pause';
    speakNextWithDelay();
  }

  const unlockAudioContext = (audioCtx) => {
    if (audioCtx.state !== 'suspended') return;
    const b = document.body;
    const events = ['touchstart', 'touchend', 'mousedown', 'keydown'];
    events.forEach(e => b.addEventListener(e, unlock, false));
    function unlock() { audioCtx.resume().then(clean); }
    function clean() { events.forEach(e => b.removeEventListener(e, unlock)); }
  }

  function playBeat() {
    unlockAudioContext(audioContext);

    const gainNode = audioContext.createGain();
    const oscillator = audioContext.createOscillator();

    // Set the oscillator type to 'sine' for a smooth sound
    oscillator.type = 'sine';

    // Set the frequency to a comfortable pitch (e.g., 800 Hz)
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);

    // Set the gain (volume) to a reasonable level
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

    // Connect the oscillator to the gain node and the gain node to the audio context's destination
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Start the oscillator
    oscillator.start();

    // Gradually decrease the volume to make it fade out smoothly
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

    // Stop the oscillator after 1 second (adjust the time as needed)
    oscillator.stop(audioContext.currentTime + 1);
  }

  function speakNextWithDelay() {
    if (currentIndex < workoutList.length) {
      const {message, time, shouldNotifyHalfTime, shouldPlaySound} = workoutList[currentIndex];
      const halfTime = Math.abs(time/2);

      if(timeLeft === 0){
        speakMessage(message);
      }

      timeLeft =  timeLeft > 0 ? timeLeft : time;

      updateCurrentExercise(message);

      countdownInterval = setInterval(() => {
        saveAppState();
        updateCountdown(timeLeft);

        if(shouldPlaySound){
          playBeat();
        }

        if (timeLeft === halfTime && shouldNotifyHalfTime) {
          speakMessage(`${halfTime} seconds`);
        }

        if (timeLeft === 0) {
          clearInterval(countdownInterval);
          currentIndex++;
          speakNextWithDelay();
        }

        timeLeft--;
      }, 1000);
    } else {
      resetWorkout();
    }
  }

  function resetWorkout() {
    currentIndex = 0;
    state = 'Play';
    document.getElementById('playPauseButton').innerText = 'Play';
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerText = '';
    document.getElementById('currentExercise').innerText = '';
    clearAppState();
  }

  function saveAppState() {
    localStorage.setItem('workoutState', JSON.stringify({ currentIndex, state, timeLeft }));
  }

  function loadAppState() {
    const savedState = localStorage.getItem('workoutState');
    if (savedState) {
      const { savedIndex, savedState, savedTimeLeft } = JSON.parse(savedState);
      currentIndex = savedIndex;
      state = savedState;
      timeLeft = savedTimeLeft;
    }
  }

  function clearAppState() {
    localStorage.removeItem('workoutState');
  }

  // Event listener for the single button
  document.getElementById('playPauseButton').addEventListener('click', toggleState);

  // Check if there was an ongoing countdown before the page was loaded
  loadAppState();
  if (timeLeft > 0 && state === 'Pause') {
    speakNextWithDelay();
  }
});
