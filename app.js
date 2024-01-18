// Workout types
const WARMUP = 'WARMUP';
const MAIN_WORKOUT = 'MAIN_WORKOUT';
const STRETCHING = 'STRETCHING';
const RELAX = 'RELAX';

// Delays in milliseconds
const DELAY_BETWEEN_EXERCISES = 10 * 1000;
const DELAY_BETWEEN_WORKOUT_TYPES = 30 * 1000;
const WARNING_TIME = 15;

function requestWakeLock() {
  if ('wakeLock' in navigator) {
    navigator.wakeLock.request('screen').then((lock) => {
      wakeLock = lock;
      console.log('Wake lock activated.');
    }).catch((error) => {
      console.error('Wake lock request failed:', error);
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const workoutList = [
    { type: WARMUP, message: 'Jumping Jacks', time: 30 },
    { type: RELAX, message: 'Relax 10 seconds', time: 10 },
    { type: WARMUP, message: 'Arm Circles', time: 30 },

    { type: RELAX, message: 'Relax 30 seconds', time: 30 },

    { type: MAIN_WORKOUT, message: 'Bodyweight Squats', time: 30 },
    { type: RELAX, message: 'Relax 10 seconds', time: 10 },
    { type: MAIN_WORKOUT, message: 'Lunges', time: 30 },

    { type: RELAX, message: 'Relax', time: 30 },

    { type: STRETCHING, message: 'Neck Stretch', time: 30 },
    { type: RELAX, message: 'Relax 10 seconds', time: 10 },
    { type: STRETCHING, message: 'Shoulder Stretch', time: 30 }
  ];

  let currentIndex = 0;
  let state = 'Play'; // Initial state
  let countdownInterval;
  let timeLeft = 0;
  let voice;

  function updateCountdown(seconds) {
    document.getElementById('countdown').innerText = `Next: ${seconds}s`;
  }

  function updateCurrentExercise(message) {
    document.getElementById('currentExercise').innerText = `Current Exercise: ${message}`;
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
      voice = window.speechSynthesis.getVoices().find((v) => v.name === savedVoice);;
    }
  }

  populateVoiceList();
  applySavedVoice();

  voiceSelect.addEventListener('change', function () {
    const selectedVoice = voiceSelect.value;
    voice = window.speechSynthesis.getVoices().find((v) => v.name === selectedVoice);
    if (voice) {
      speakExercise('Testing voice selection.', voice);
      saveSelectedVoice();
    }
  });

  function speakExercise(message) {
    const exerciseUtterance = new SpeechSynthesisUtterance(message);
    exerciseUtterance.voice = voice;
    window.speechSynthesis.speak(exerciseUtterance);
    updateCurrentExercise(message);
  }

  function speakWarning() {
    const warningUtterance = new SpeechSynthesisUtterance('Warning: 15 seconds remaining');
    warningUtterance.voice = voice;
    window.speechSynthesis.speak(warningUtterance);
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

  function speakNextWithDelay() {
    if (currentIndex < workoutList.length) {
      const currentExercise = workoutList[currentIndex];
      speakExercise(currentExercise.message);

      const delay = timeLeft > 0 ? timeLeft * 1000 :
        currentExercise.type === RELAX ? DELAY_BETWEEN_EXERCISES : DELAY_BETWEEN_WORKOUT_TYPES;
      timeLeft = Math.floor(delay / 1000);

      countdownInterval = setInterval(() => {
        saveAppState();
        updateCountdown(timeLeft);

        if (timeLeft === WARNING_TIME) {
          speakWarning();
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

  // Request wake lock
  requestWakeLock();
});
