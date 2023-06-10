//your JS code here. If required.
const url = 'https://pixabay.com/sound-effects/search/clap/';
const sounds = {
  'A': 'url',
  'S': 'url',
  'D': 'url',
  'F': 'url',
  'G': 'url',
  'H': 'url',
  'J': 'url',
  'K': 'url',
  'L': 'url',
};
function playSound(key) {
  const soundFile = sounds[key];
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }

document.addEventListener('keydown', function(event) {
  const key = event.key.toUpperCase();
  playSound(key);
});
}