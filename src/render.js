import './styles.css';

const render = () => {
  const element = document.createElement('div');

  element.classList.add('cover');
  element.innerHTML = `
    <ul class="nav-bar">
      <li>Home</li>
      <li>Menu</li>
      <li>Contact</li>
    </ul>
  `;

  return element;
};

export default render;