document.addEventListener("DOMContentLoaded", function (event) {
  // обновления контента после выбора значение в селекте на старнице "Материалы для скачивания"
  const filesSelect = document.querySelector(".js-files-select");

  if (filesSelect) {
    filesSelect.addEventListener("change", (e) => {
      let self = e.target;
      let value = e.target.options[e.target.selectedIndex].value;

      // какие-то действия
    });
  }
  // END

  // поиск в хедере
  let timerDelay;
  const searchInput = document.querySelector(".search__from-input");
  const searchForm = document.querySelector(".search__form");
  const searchContent = document.querySelector(".search__content");
  const searchContentOk = document.querySelector(".search__content-wrapper");
  const searchContentError = document.querySelector(".search__content-empty-results");

  searchInput.addEventListener("keyup", ()=>{
    clearTimeout(timerDelay);

    timerDelay = setTimeout(() => {

      // показываем контент после подставновки результатов поиска
      searchContent.classList.add("is-shown");

      // если нет результатов
      // searchContentOk.classList.add("is-hidden");
      // показываем заглушку
      // searchContentError.classList.add("is-active");

      // убираем контент если пустое поле ввода
      if (searchInput.value === "") {
        searchContent.classList.remove("is-shown");
      }

    }, 500);
  });

  // отправка формы и перевод на страницу с результатами
  searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
  });
  // поиск в хедере END
});