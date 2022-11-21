const characteristics = () => {
  const charsBtn = document.querySelector(".product-characteristics__show-more-btn");
  const charsWrapper = document.querySelector(".product-characteristics__wrapper");
  let flag = true;

  if (!charsBtn) return;

  const length = charsWrapper.querySelectorAll(".product-characteristics__row").length;


  if (length <= 5) {
    charsBtn.style.display = "none";
  }

  charsBtn.addEventListener("click", () => {
    switch (flag) {
      case true:
        charsWrapper.classList.add("is-active");
        flag = false;
        charsBtn.innerHTML = "Скрыть";
        break;
      case false:
        charsWrapper.classList.remove("is-active");
        flag = true;
        charsBtn.innerHTML = "Показать ещё";
        break;
    }
  });
};

window.reinitChars = () => {
  characteristics();
};

export default characteristics;
