function showPage(pageNow, pageNext) {
    const pageToShow = document.getElementById(pageNext);
    const pageToHide = document.getElementById(pageNow);

    pageToShow.style.display = 'flex';
    pageToHide.style.display = 'none';
}

function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = '260105';

    // Ultah ny siapa nich

    if (passwordInput === correctPassword) {
      showPage('page-2', 'page-3');
    } else {
      alert('Incorect password!');
    }
}
function forgotPassword() {
    alert('Hmm kok km bisa lupa, apa aku ny yg salah?');
  }


const video = document.getElementById('full-video');
video.addEventListener('play', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
});