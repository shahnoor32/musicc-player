const playButton = document.getElementById('playButton');
const musicPlayer = document.getElementById('musicPlayer');
const songInfo = document.getElementById('songInfo');

// Update song info dynamically when the song starts playing
musicPlayer.addEventListener('play', function() {
  songInfo.innerHTML = 'Song Title: My Favorite Song';
});

// Handle play and pause button functionality
playButton.addEventListener('click', function() {
  if (musicPlayer.paused) {
    musicPlayer.play();
    playButton.innerHTML = 'Pause';
  } else {
    musicPlayer.pause();
    playButton.innerHTML = 'Play';
  }
});

