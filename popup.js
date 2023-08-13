// Image script

function opensqlPopup() {
  const sqlPopup = document.getElementById('sqlPopup');
  sqlPopup.style.display = 'block';
}

function closesqlPopup() {
  const sqlPopup = document.getElementById('sqlPopup');
  sqlPopup.style.display = 'none';
}

function openPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Close pop-ups when clicking outside the boxes
window.onclick = function (event) {
  const sqlPopup = document.getElementById('sqlPopup');
  const popup = document.getElementById('popup');

  if (event.target === sqlPopup) {
    sqlPopup.style.display = 'none';
  }

  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

//------------------------------------------------

// Video Script

// let videoCurrentTime = 0; // Variable to store the current time of the video

// function openVideoPopup() {
//     const videoPopup = document.getElementById('videoPopup');
//     videoPopup.style.display = 'block';

//     // Set the video source and restore the current playback time when opening the popup
//     const videoPlayer = document.getElementById('videoPlayer');
//     videoPlayer.src = './beq.mp4';
//     videoPlayer.currentTime = videoCurrentTime;
// }

// function closeVideoPopup() {
//     const videoPopup = document.getElementById('videoPopup');
//     videoPopup.style.display = 'none';

//     // Pause the video and store the current playback time when closing the popup
//     const videoPlayer = document.getElementById('videoPlayer');
//     videoPlayer.pause();
//     videoCurrentTime = videoPlayer.currentTime;

// }
