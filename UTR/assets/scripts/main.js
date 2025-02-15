/* ======================== Slide Display Control ===================== */
// var contents2 = document.getElementsByClassName("slide-content-interpolation");

// document.getElementById("slide-menu-interpolation").addEventListener("click", function(e) {
//   const idx = [...this.children]
//     .filter(el => el.className.indexOf('dot') > -1)
//     .indexOf(e.target);

//   if (idx >= 0) {
//     var prev = document.querySelector(".interpolation .dot.active");
//     if (prev) prev.classList.remove("active");
//     e.target.classList.add("active");

//     for (var i = 0; i < contents2.length; i++) {
//       if (i == idx) {
//         contents2[i].style.display = "block";
//       } else {
//         contents2[i].style.display = "none";
//       }
//     }
//   }
// });

// var contents3 = document.getElementsByClassName("slide-content-slow");

// document.getElementById("slide-menu-slow").addEventListener("click", function(e) {
//   const idx = [...this.children]
//     .filter(el => el.className.indexOf('dot') > -1)
//     .indexOf(e.target);

//   if (idx >= 0) {
//     var prev = document.querySelector(".slow .dot.active");
//     if (prev) prev.classList.remove("active");
//     e.target.classList.add("active");

//     for (var i = 0; i < contents3.length; i++) {
//       if (i == idx) {
//         contents3[i].style.display = "block";
//       } else {
//         contents3[i].style.display = "none";
//       }
//     }
//   }
// });

// var contents4 = document.getElementsByClassName("slide-content-nvs");

// document.getElementById("slide-menu-nvs").addEventListener("click", function(e) {
//   const idx = [...this.children]
//     .filter(el => el.className.indexOf('dot') > -1)
//     .indexOf(e.target);

//   if (idx >= 0) {
//     var prev = document.querySelector(".nvs .dot.active");
//     if (prev) prev.classList.remove("active");
//     e.target.classList.add("active");

//     for (var i = 0; i < contents4.length; i++) {
//       if (i == idx) {
//         contents4[i].style.display = "block";
//       } else {
//         contents4[i].style.display = "none";
//       }
//     }
//   }
// });
/* ======================== Video Control ===================== */
function ToggleVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
      if (videos[i].paused) {
          videos[i].play();
      } else {
          videos[i].pause();
      }
  }
};


function SlowVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].playbackRate = videos[i].playbackRate * 0.9;
    videos[i].play();
  }

  var msg = document.getElementById(x + '-msg');
  msg.innerHTML = 'Speed: ' + '×' + videos[0].playbackRate.toFixed(2);

  msg.classList.add("fade-in-out");
  msg.style.animation = 'none';
  msg.offsetHeight; /* trigger reflow */
  msg.style.animation = null; };


function FastVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].playbackRate = videos[i].playbackRate / 0.9;
    videos[i].play();
  }

  var msg = document.getElementById(x + '-msg');
  msg.innerHTML = 'Speed: ' + '×' + videos[0].playbackRate.toFixed(2);

  msg.classList.add("fade-in-out");
  msg.style.animation = 'none';
  msg.offsetHeight; /* trigger reflow */
  msg.style.animation = null;
};

function RestartVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].pause();
    videos[i].playbackRate = 1.0;
    videos[i].currentTime = 0;
    videos[i].play();
  }

  var msg = document.getElementById(x + '-msg');
  msg.innerHTML = 'Speed: ' + '×' + videos[0].playbackRate.toFixed(2);

  msg.classList.add("fade-in-out");
  msg.style.animation = 'none';
  msg.offsetHeight; /* trigger reflow */
  msg.style.animation = null;
};


/* ======================== Slide Show Control ===================== */
const slider = document.querySelector('.container .slider');
const [btnLeft, btnRight] = ['prev_btn', 'next_btn'].map(id => document.getElementById(id));
let interval;

// Set positions
const setPositions = () =>
    [...slider.children].forEach((item, i) =>
        item.style.left = `${(i-1) * 440}px`);

// Initial setup
setPositions();

// Set transition speed
const setTransitionSpeed = (speed) => {
    [...slider.children].forEach(item =>
        item.style.transitionDuration = speed);
};

// Slide functions
const next = (isAuto = false) => {
    setTransitionSpeed(isAuto ? '1.5s' : '0.2s');
    slider.appendChild(slider.firstElementChild);
    setPositions();
};

const prev = () => {
    setTransitionSpeed('0.2s');
    slider.prepend(slider.lastElementChild);
    setPositions();
};

// Auto slide
const startAuto = () => interval = interval || setInterval(() => next(true), 2000);
const stopAuto = () => { clearInterval(interval); interval = null; };

// Event listeners
btnRight.addEventListener('click', () => next(false));
btnLeft.addEventListener('click', prev);

// Mouse hover controls
[slider, btnLeft, btnRight].forEach(el => {
    el.addEventListener('mouseover', stopAuto);
    el.addEventListener('mouseout', startAuto);
});

// Start auto slide
startAuto();