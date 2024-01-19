window.addEventListener('load', function () {
  const workoutList = [
    { message: 'Good luck!', time: 5 },

    { message: 'Next exercise is Jumping Jacks in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Leg Swings in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Hip Circles in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is High Knees in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Butt Kicks in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Jump Rope in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Torso Twists in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Ankle Rolls in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Dynamic Lunges in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },

    { message: 'Next exercise is Wrist Circles in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Neck Tilts and Rolls in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Side Bends in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },

    { message: 'Relax 30 seconds before main workout', time: 30, shouldNotifyHalfTime: true },

    { message: 'Next exercise is Bodyweight Squats in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Lunges in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Push-ups in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Tricep Dips in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Bodyweight Rows in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Mountain Climbers in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Burpees in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Bicycle crunch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Calf Raises in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Plank in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },

    { message: 'Relax', time: 30 },

    { message: 'Next exercise is Neck Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Shoulder Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Triceps Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Chest Opener in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Wrist Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Cat-Cow Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Child Pose in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Seated Forward Bend in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Butterfly Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Quadriceps Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Hamstring Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Inner Thigh Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Calf Stretch in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },
    { message: 'Relax 10 seconds', time: 10 },

    { message: 'Next exercise is Spinal twist in 5 seconds', time: 10 },
    { message: 'Start', time: 30, shouldNotifyHalfTime: true, shouldPlaySound: true },
    { message: 'End', time: 5 },

    { message: 'Good job!', time: 5 },
  ];

  let currentIndex = 0;
  let state = 'Play'; // Initial state
  let countdownInterval;
  let timeLeft = 0;
  let voice;

  let audioContext;

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
      speakMessage('Testing voice selection.', voice);
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

  function playBeat() {
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
