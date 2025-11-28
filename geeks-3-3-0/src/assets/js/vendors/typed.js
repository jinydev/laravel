document.querySelectorAll("[data-strings]").forEach((element) => {
  const strings = element.getAttribute("data-strings").split(", ");
  new Typed(element, {
    strings,
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
  });
});
