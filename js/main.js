// javaScript Document
(() => {
console.log('video stuff fired');
//add to the string protoype to cap the first letter
// review this first thing next week!
String.prototype.capIt = function() {return this.replace(this.charAt(), this.charAt().toUpperCase()); };

// variables at the top
const sigils = document.querySelectorAll('.sigilContainer'),
lightbox = document.querySelector('.lightbox'),
closeLightbox = lightbox.querySelector('.close-lightbox'),
vidPlayer = document.querySelector('video'),
tagLine = document.getElementById('tagLine'),
playPause = document.querySelector('.play-pause'),
ffwd = document.querySelector('.forward'),
rwnd = document.querySelector('.rewind'),
imageBanner = document.querySelector('#houseImages'),
volumeUp = document.querySelector('.volumeUp'),
volumeDown = document.querySelector('.mute');

//methods / function in the middle
function loadMovie() {
  //debugger;
  //1.turn on the lightbox
  lightbox.classList.add('show-lightbox');

//2. grab the right video based on the class name --. the split yields the name

var house = this.className.split(' ')[1].capIt();

vidPlayer.src = `video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;
tagLine.textContent = house;

vidPlayer.load();
vidPlayer.play();

animateBanners(this.dataset.offset);
}

function animateBanners(offset) {
  console.log(600 * offset);

  imageBanner.style.right = (offset * 600) + "px";
}

function closeBox() {
  lightbox.classList.remove('show-lightbox');
  vidPlayer.pause();
  vidPlayer.currentTime = 0;

}

function togglePlay() {
  var theSVG = this.firstElementChild;

  if (vidPlayer.paused) {
    theSVG.dataset.icon = 'pause-circle';
    vidPlayer.play();

  }else{
  theSVG.dataset.icon = 'play-circle';


  vidPlayer.pause();
  }
}

function ffwdVid() {
  console.log('forward');
  vidPlayer.currentTime += 5;
}

function rwndVid() {
  console.log('rewind');
  vidPlayer.currentTime = 0;
}

function muteVol() {
  vidPlayer.muted = true;
}

function increaseVol() {
  vidPlayer.muted = false;
}




//events at the bottom
sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
closeLightbox.addEventListener('click', closeBox);

vidPlayer.addEventListener('ended', closeBox);
playPause.addEventListener('click', togglePlay);
ffwd.addEventListener('click', ffwdVid);
rwnd.addEventListener('click', rwndVid);
volumeDown.addEventListener('click', muteVol);
volumeUp.addEventListener('click', increaseVol);
})();
