const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItem = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});


document.querySelectorAll('.nav-list a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Check if the href refers to the current page
    if (href==="./solutions.html" ) {
      window.location.href = href;
      return
    }
    

    e.preventDefault();
    const targetId = href.substring(1); // Remove "#" from href
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Calculate offset to position the section end visibly on the screen
      const offsetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - window.innerHeight + targetSection.offsetHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});


document.querySelectorAll('.contact-left a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Check if the href refers to the current page
    if (href==="./solutions.html" ) {
      window.location.href = href;
      return
    }
    

    e.preventDefault();
    const targetId = href.substring(1); // Remove "#" from href
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Calculate offset to position the section end visibly on the screen
      const offsetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - window.innerHeight + targetSection.offsetHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});


// The classList property allows you to interact with the classes of an HTML element.
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});

// after hero
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});






// Smooth scrolling
document.querySelectorAll('.nav-list a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offsetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - window.innerHeight + targetSection.offsetHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});

// Initialize Lottie animations
const animations = [
  { container: 'lottie-container', path: 'assets/icons/ecomax.json' },
  { container: 'lottie-container2', path: 'assets/icons/OurVision.json' },
  { container: 'lottie-container3', path: 'assets/icons/OurMission.json' },
];

animations.forEach(anim => {
  lottie.loadAnimation({
    container: document.getElementById(anim.container),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: anim.path,
  });
});

