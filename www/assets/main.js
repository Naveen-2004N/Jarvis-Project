(function animateMainText() {
  const el = document.querySelector(".text");
  let showing = true;

  function toggle() {
    if (showing) {
      el.classList.remove("bounceOut");
      el.classList.add("animated", "bounceIn");
    } else {
      el.classList.remove("bounceIn");
      el.classList.add("animated", "bounceOut");
    }
    showing = !showing;
  }

  toggle();
  setInterval(toggle, 2000); // loop
})();

// Siri Wave
let siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 800,
    height: 200,
    style:"ios9",
    speed:"0.15",
    amplitude:"1",
    autostart:true
  });

// Siri message animation
(function animateMainText() {
  const el = document.querySelector(".siri-message");
  let showing = true;

  function toggle() {
    if (showing) {
      el.classList.remove("fadeIn");
      el.classList.add("animated", "fadeOutUp");
    } else {
      el.classList.remove("fadeOutUp");
      el.classList.add("animated", "fadeIn");
    }
    showing = !showing;
  }

  toggle();
  setInterval(toggle, 2000); // loop
})();