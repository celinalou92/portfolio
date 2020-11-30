var textWrapper = document.querySelector('.effect1');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^.\s]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.effect1 .letter',
    scale: [5,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1350,
    delay: function(el, i) {
      return 70*i;
  }
}, 1500);