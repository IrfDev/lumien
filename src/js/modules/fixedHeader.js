export default () => {

  const pageHeader = document.querySelector(".header");
  if (!pageHeader) return;

  window.addEventListener("scroll", ()=>{
    let scrollDistance = window.scrollY;

    if (scrollDistance >= 10) {
      pageHeader.classList.add("is-fixed");
    } else {
      pageHeader.classList.remove("is-fixed");
    }
  });

  if (window.scrollY >= 10) {
    pageHeader.classList.add("is-fixed");
  }
};
