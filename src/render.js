import './styles.css';
import homePage from './home';
import contactPage from './contact';
import menuPage from './menu';

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
  const contact = element.querySelector('#contact');
  const menu = element.querySelector('#menu');

  display.appendChild(homePage());

  home.addEventListener('click', () => {
    display.innerHTML = '';
    display.appendChild(homePage());
  });

  contact.addEventListener('click', () => {
    display.innerHTML = '';
    display.appendChild(contactPage());
  });

  menu.addEventListener('click', () => {
    display.innerHTML = '';
    display.appendChild(menuPage());
  });

  return element;
};

export default render;