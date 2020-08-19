// alert('Esse não é um site oficial do discord')

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;

      if (isSectionVisible) item.classList.add("ativo");
    });
  }

  window.addEventListener("scroll", () => {
    animaScroll();
  });
}

initAnimaScroll();



  let show = true;

  const buttonOffCanvas = document.querySelectorAll(".js-offcanvas__button");
  const menuOffCanvas = document.querySelector(".js-offcanvas__menu");

  function offCanvas() {
    document.body.style.overflow = show ? "hidden" : "initial";

    menuOffCanvas.classList.toggle("ativo");
    menuOffCanvas.previousElementSibling.classList.toggle("ativo", show);

    show = !show;
  }

  buttonOffCanvas.forEach((button) => {
    button.addEventListener("click", offCanvas);
  });
