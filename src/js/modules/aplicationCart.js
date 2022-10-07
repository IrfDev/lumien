export default () => {
  const carts = document.querySelectorAll(".applications-cart");
  let mql = window.matchMedia('(min-width: 1200px)');

  if (carts.length === 0) return;

  if (mql.matches) {
    carts.forEach(cart => {
      const height = cart.offsetHeight;

      cart.querySelector(".applications-cart__img").style.height = height + "px";
    });
  }

};
