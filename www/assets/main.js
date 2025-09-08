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