const contactPage = () => {
  const contact = document.createElement('div');
  contact.innerHTML = `
    <div class="container">
      <h1>Contact Us</h1>
      <h3>For Reservations, Orders, Compliments or Complains</h3>
      <h4 class="contact-h4">Contact</h4>
      <p>mupasmail@gmail.com</p>
      <p>+4912345678910</p>
      <h4 class="contact-h4">Address</h4>
      <p>Schwetzinger Str.</p>
      <p>Mannheim</p>
    </div>  
  `;
  return contact;
};

export default contactPage;
