document.addEventListener('DOMContentLoaded', function() {
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    const welcomeContent = document.querySelector('.welcome-content');
    const closeBtn = document.querySelector('.close-btn');
  
    // Show the welcome when the page loads
    welcomeOverlay.classList.add('active');
    welcomeContent.classList.add('active');
    document.documentElement.classList.add('no-scroll');
  
    // Close the welcome when the close button is clicked
    closeBtn.addEventListener('click', function() {
      welcomeOverlay.classList.remove('active');
      welcomeContent.classList.remove('active');
      document.documentElement.classList.remove('no-scroll');
    });
  
    // Prevent clicks on the welcome from propagating to underlying elements
    welcomeContent.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
  