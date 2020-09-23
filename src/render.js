import './styles.css';
import homePage from './home';
import contactPage from './contact';

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

  display.appendChild(homePage());

  home.addEventListener('click', () => {
    display.innerHTML = '';
    display.appendChild(homePage());
  });

  contact.addEventListener('click', () => {
    display.innerHTML = '';
    display.appendChild(contactPage());
  });

  return element;
};

export default render;