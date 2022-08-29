export default () => {
  const inpts = Array.from(document.querySelectorAll("input[name=agreement]"));

  if (inpts.length === 0) return;

  inpts.forEach( inpt => {
    inpt.addEventListener("change", () => {
      if (inpt.checked === false) {
        inpt.closest("form").querySelector(".form__btn").classList.add("disabled");
      } else {
        inpt.closest("form").querySelector(".form__btn").classList.remove("disabled");
      }
    });
  });
};
