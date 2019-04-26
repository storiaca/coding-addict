const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998'];

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}

colorBtn.addEventListener('click', changeColor);