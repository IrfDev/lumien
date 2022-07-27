import lazyIMages from './lazyIMages';

export default () => {
  const tabs = document.querySelector(".js-tabs");

  if (!tabs) return;

  const tabBtns = Array.from(document.querySelectorAll(".js-tab-btn"));
  const tabContents = Array.from(document.querySelectorAll(".js-tab-content"));
  const mobileLayer = document.querySelector(".js-mobile-layer");

  tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const imgBgSrc = btn.dataset.img;

      mobileLayer.setAttribute("data-bg", imgBgSrc);
      mobileLayer.setAttribute("style", `background-image: url(${imgBgSrc});`);

      tabBtns.forEach(tabBtn => tabBtn.classList.remove("is-active"));
      btn.classList.add("is-active");

      tabContents.forEach(tab => tab.classList.remove("is-active"));
      tabContents[index].classList.add("is-active");
    });
  });
};
