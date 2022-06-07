// Import stylesheets
import './style.css';

const inputFile = document.querySelector('input[type=file]');
const infoContainer = document.querySelector('.info-container');
const paragraphs = infoContainer.children;

inputFile.addEventListener('change', () => {
  const file = inputFile.files[0];
  const { name, size, type } = file;

  paragraphs[0].firstElementChild.textContent += name;
  paragraphs[1].firstElementChild.textContent +=
    (size / 1000000).toFixed(2) + ' MB';
  paragraphs[2].firstElementChild.textContent += type;

  infoContainer.style.display = 'block';
});

infoContainer.lastElementChild.addEventListener('click', () => {
  inputFile.value = null;
  infoContainer.style.display = 'none';
});
