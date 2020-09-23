import './styles.css';
import homePage from './home';

const render = () => {
  const element = document.createElement('div');

  element.classList.add('cover');
  element.innerHTML = `
    <nav>
      <ul class="nav-bar">
        <li id="home">Home</li>
        <li id="menu">Menu</li>
        <li id="contact">Contact</li>
      </ul>
    </nav>
    <div class="display"></div>
  `;
  const display = element.querySelector('.display');
  const home = element.querySelector('#home');

  display.appendChild(homePage());

  home.addEventListener('click', () => {
    display.innerHTML = '';
    display.appendChild(homePage());
  });

  return element;
};

export default render;