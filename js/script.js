// menu button for small screens
var btn = document.querySelector('.nav-toggle');
var nav = document.getElementById('nav');

if (btn && nav) {
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // close the menu after a link is tapped
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}
