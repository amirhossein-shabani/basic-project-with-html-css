const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// -------we write this code with scrollReveal  library --------



if (window.innerWidth > 768) {

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  }; 

  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".header__content form", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".header__content .bar", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".header__image__card ", {
    duration: 1000,
    interval: 200,
    delay: 2500,
  });

} else {

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    reset : true ,
  };

  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
    reset : false ,
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    origin: "right",
    delay: 200,
  });

  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    origin: "left",
    delay: 200,
  });

  ScrollReveal().reveal(".header__content form", {
    ...scrollRevealOption,
    origin: "right",
    delay: 400,
  });

  ScrollReveal().reveal(".header__content .bar", {
    ...scrollRevealOption,
    origin: "left",
    delay: 600,
  });

  ScrollReveal().reveal(".header__image__card ", {
    duration: 1000,
    interval: 200,
    delay: 600,
  });
}
