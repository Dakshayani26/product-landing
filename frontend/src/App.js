import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Landing Page</h1>
        <nav>
          <ul>
            <li><a href="#mobiles">Mobiles</a></li>
            <li><a href="#laptops">Laptops</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="mobiles" className="product-section">
          <h2>Mobile Phones</h2>
          <Product
            image="mobile.jpg = 50px"
            name="Mobile Phone Name"
            description="Description of the mobile phone."
            price="10000"
          />
        </section>

        <section id="laptops" className="product-section">
          <h2>Laptops</h2>
          <Product
            image="laptop.jpg = 200px"
            name="Laptop Name"
            description="Description of the laptop."
            price="15000"
          />
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Product Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Product({ image, name, description, price }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      <a href="#">Buy Now</a>
    </div>
  );
}

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;