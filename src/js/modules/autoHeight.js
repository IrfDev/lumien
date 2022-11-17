export default () => {
  const catalog = document.querySelector('.catalog-inner');

  if (!catalog) return;

  const calcHeight = () => {
    const headings = catalog.querySelectorAll(".cart__name");
    const texts = catalog.querySelectorAll(".cart__txt");
    const media = window.matchMedia("(min-width: 768px)").matches;
    let headghtArr = [];
    let textArr = [];

    function maxNum(arr) {
      let max = arr[0];
      arr.forEach(num => {
        if (num > max) max = num;
      });
      return max;
    }

    if (media) {
      headings.forEach(heading => {
        const height = heading.clientHeight;

        headghtArr.push(height);
      });

      texts.forEach(text => {
        const height = text.clientHeight;

        textArr.push(height);
      });

      const maxHeight = maxNum(headghtArr);
      const maxHeightText = maxNum(textArr);

      headings.forEach(heading => {
        heading.style.height = maxHeight + "px";
      });

      texts.forEach(text => {
        text.style.height = maxHeightText + "px";
      });

    };
  };
  calcHeight();


  window.lumien_API.calculateCartHeight = () => {
    calcHeight();
  };
};

