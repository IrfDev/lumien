export default () => {
  // kostil selecta
  const sltcs = Array.from(document.querySelectorAll(".js-callback-select"));

  sltcs.forEach(sltc => {
    sltc.addEventListener("change", (e) => {
      let self = e.target;
      let value = e.target.options[e.target.selectedIndex].value;

      sltc.closest(".custom-select").classList.add("is-active");

      if (value === "0") {
        sltc.closest(".custom-select").classList.remove("is-active");
      }
    });
  })
};
