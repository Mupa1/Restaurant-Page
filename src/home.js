const homePage = () => {
  const home = document.createElement('div');
  home.innerHTML = `
    <h1 class="home-h1">SteakHouse</h1>
    <h3 class="home-h3">A variety of cuts of Meat & Salads</h3>
  `;
  return home;
};

export default homePage;
