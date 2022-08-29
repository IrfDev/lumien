export default () => {
  // kostil selecta
  const sltc = document.querySelector(".js-callback-select");

  sltc.addEventListener("change", (e) => {
    let self = e.target;
    let value = e.target.options[e.target.selectedIndex].value;

    sltc.closest(".custom-select").classList.add("is-active");

    if (value === "Не выбрано") {
      sltc.closest(".custom-select").classList.remove("is-active");
    }
  });
};
