let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
// ----------------------------------------
// Get all the images with the class "slidepopup-trigger"
const slidepopupTriggers = document.querySelectorAll(".slidepopup-trigger");

// Get all the slidepopup containers and close icons
const slidepopups = document.querySelectorAll(".slidepopup");
const closeIcons = document.querySelectorAll(".close-icon");

// Get all the videos in mySlides1
const videos1 = document.querySelectorAll(".mySlides1 video");
const videos2 = document.querySelectorAll(".mySlides2 video");

// Array to store the video current time before pause
const videoCurrentTime1 = [];
const videoCurrentTime2 = [];

// Add event listener to each video to store the current time before pause
videos1.forEach((video, index) => {
  video.addEventListener("pause", () => {
    videoCurrentTime1[index] = video.currentTime;
  });
});

videos2.forEach((video, index) => {
  video.addEventListener("pause", () => {
    videoCurrentTime2[index] = video.currentTime;
  });
});
  

// Add click event listeners to each image
slidepopupTriggers.forEach((trigger, index) => {
  trigger.addEventListener("click", () => {
    // Get the target slides class from the data attribute
    const slidesClass = trigger.getAttribute("data-slides");
    showslidepopup(slidesClass, index);
  });
});

// Add click event listener to each close icon
closeIcons.forEach((closeIcon, index) => {
  closeIcon.addEventListener("click", () => {
    hideslidepopup(index);
  });
});

// Function to show the slidepopup with specific slides
function showslidepopup(slidesClass, index) {
    // Show the slidepopup
    slidepopups[index].classList.add("show");
  
    // Show the specific slides
    const slidesToShow = slidepopups[index].querySelectorAll(`.${slidesClass}`);
    slidesToShow.forEach(slide => {
      slide.style.display = "block";
    });
  
    // Reset the slideIndex for the current slidepopup
    slideIndex[index] = 1;
    showSlides(slideIndex[index], index);
  
    // Set the video playback time to the last paused time
    if (slidesClass === "mySlides1" && videos1.length > 0) {
      videos1.forEach((video, i) => {
        video.currentTime = videoCurrentTime1[i] || 0;
      });

    if (slidesClass === "mySlides2" && videos2.length > 0) {
      videos2.forEach((video, i) => {
        video.currentTime = videoCurrentTime2[i] || 0;
      });
    }
  }
}

// Function to hide the slidepopup and reset the slides
function hideslidepopup(index) {
    // Hide the slidepopup
    slidepopups[index].classList.remove("show");
  
    // Pause all videos before hiding
    const videosToPause1 = slidepopups[index].querySelectorAll(".mySlides1 video");
    videosToPause1.forEach(video => {
    video.pause();
    });

    const videosToPause2 = slidepopups[index].querySelectorAll(".mySlides2 video");
    videosToPause2.forEach(video => {
    video.pause();
    });
  
    // Hide all the slides
    const allSlides = slidepopups[index].querySelectorAll(".slideshow-container > div");
    allSlides.forEach(slide => {
      slide.style.display = "none";
    });
  }


  // Function to handle the next and previous buttons
function plusSlidesWithVideo(n, no) {
    // Pause the video before changing slides
    if (no === 0 && videos1.length > 0) {
      videos1.forEach((video, i) => {
        video.pause();
      });
    }

    if (no === 1 && videos2.length > 0) {
      videos2.forEach((video, i) => {
        video.pause();
      });
    }
  
    // Call the original plusSlides function to change slides
    plusSlides(n, no);
  }


//   ----------------------------------------

// ==================Nav Manu========================

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }