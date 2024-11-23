    document.addEventListener('DOMContentLoaded', function () {
      // Load saved profile
      const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
      if (savedProfile) {
        const welcomeUser = document.getElementById('welcomeUser');
        const navProfilePic = document.getElementById('navProfilePic');
        welcomeUser.textContent = `Welcome, ${savedProfile.name}`;
		//welcomeUser.setAttribute('style', 'color: black !important;');  // Set text color to white with high priority
        
        if (savedProfile.profilePic) {
          navProfilePic.src = savedProfile.profilePic;
          navProfilePic.classList.remove('hidden');
        }
      }
    });