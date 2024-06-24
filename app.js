let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');
let container = document.querySelector('.container');
let body = document.body;

const url = 'https://api.quotable.io/random';

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
      changeColors();
    });
};

const changeColors = () => {
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const newColor = randomColor();
  body.style.backgroundColor = newColor;
  container.style.backgroundColor = newColor;
};

window.addEventListener('load', getQuote);
btn.addEventListener('click', getQuote);
