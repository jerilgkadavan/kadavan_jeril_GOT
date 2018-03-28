// javaScript Document
(() => {
console.log('video stuff fried');
//add to the string protoype to cap the first letter
// review this first thing next week!
String.prototype.capIt = function() {return this.replace(this.charAt(), this.charAt().toUpperCase()); };

// variables at the top
const sigils = document.querySelectorAll('.sigilContainer');
const lightbox = document.querySelector('.lightbox');
const closeLightbox = lightbox.querySelector('.close-lightbox');
const vidPlayer = document.querySelector('video');
const tagline =document.querySelector('#tagline');
const videoHeading =document.querySelector('#videoHeading');
const playPause = document.querySelector('.controls');
const rWnd = document.querySelector('.rewind');
const ffwd = document.querySelector('.forward');
const imageBanner = document.querySelector('#houseImages');


//methods / function in the middle
function loadMovie() {
  //debugger;
  //1.turn on the lightbox
  lightbox.classList.add('show-lightbox');

//2. grab the right video based on the class name --. the split yields the name

var house = this.className.split(' ')[1].capIt();
console.log(house)

//3.put  the path together and make the video load and vidPlayer
vidPlayer.src = `video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;

tagline.textContent = house;
videoHeading.textContent = house;

vidPlayer.load();
vidPlayer.play();

animateBanners(this.dataset.offset);
}

function animateBanners(offset) {

//aniamte the banners across the screen, using the offset as a multipler
//600 is the width of each image -> the sum / product is how much it needs to move
  imageBanner.style.right = (offset * 600) + "px";
}

function closeBox() {
  lightbox.classList.remove('show-lightbox');
  vidPlayer.pause();
  vidPlayer.currentTime = 0;

}

function togglePlay() {
//flip this according to the video state => if playing, pause it. If IT's paused, play it. and change the icon's class to shoe the correct state(play / pause data-icon attirbute)
var theSVG = this.firstElementChild;

if(vidPlayer.paused) {
  theSVG.dataset.icon = "play-circle";
  vidPlayer.play();
}
else {
  theSVG.dataset.icon = "play-circle";
  vidPlayer.pause();
}
}

function rWindVid() {
console.log('rewind')
}

function ffWdVid() {
console.log('forward')
}
// ADD EVENT LISTENER STACK
sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
closeLightbox.addEventListener('click', closeBox);
vidPlayer.addEventListener('ended', closeBox);
playPause.addEventListener('click', togglePlay);
rWnd.addEventListener('click', rWindVid);
ffWd.addEventListener('click', ffWdVid);
})();
