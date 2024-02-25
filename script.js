const startBtn = document.getElementById('start-btn');
const outputDiv = document.getElementById('output');
const recognition = new webkitSpeechRecognition() || SpeechRecognition();
recognition.lang = 'en-US';

startBtn.addEventListener('click', () => {
  recognition.start();
  outputDiv.textContent = 'Listening...';
});

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  outputDiv.textContent = transcript;
};

recognition.onerror = function(event) {
  outputDiv.textContent = 'Error occurred in recognition: ' + event.error;
};

recognition.onend = function() {
  outputDiv.textContent = 'Speech recognition ended.';
};
