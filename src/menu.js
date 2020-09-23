import chicken from './images/cover-img.jpg';
import beefCuts from './images/beef-cuts.jpg';
import mshkaki from './images/mshkaki.jpg';
import ribs from './images/ribs.jpg';
import sausages from './images/sausages.jpeg';
import shawarma from './images/shawarma.jpg';

const ourMenu = `
  <div class="container">
    <h1>Our Menu</h1>
    <div class="menu-container">
      <figure class="menu-item">
        <img src=${chicken} alt="chicken">
        <figcaption>Chicken €9</figcaption>
      </figure>
      <figure class="menu-item">
        <img src=${beefCuts} alt="beefCuts">
        <figcaption>Beef Cuts €12</figcaption>
      </figure>
      <figure class="menu-item">
        <img src=${mshkaki} alt="mshkaki">
        <figcaption>Mshkaki €8</figcaption>
      </figure>
      <figure class="menu-item">
        <img src=${ribs} alt="ribs">
        <figcaption>Ribs €7</figcaption>
      </figure>
      <figure class="menu-item">
        <img src=${sausages} alt="sausages">
        <figcaption>Sausages €2</figcaption>
      </figure>
      <figure class="menu-item">
        <img src=${shawarma} alt="shawarma">
        <figcaption>Shawarma €12</figcaption>
      </figure>
    </div>
  </div>  
`;

const menuPage = () => {
  const menu = document.createElement('div');
  menu.innerHTML = ourMenu;
  return menu;
};

export default menuPage;
