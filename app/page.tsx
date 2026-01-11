'use client'

import { useRef } from 'react'

export default function Home() {
  const menuRef = useRef<HTMLDivElement>(null)

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-headline">Fresh Coffee, Made Daily</h1>
          <p className="hero-subheadline">Visit Fresh Coffee for the best espresso in town</p>
          <button className="cta-button" onClick={scrollToMenu}>
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            Since 2010, we've been serving the community with locally roasted beans and handcrafted drinks.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu" ref={menuRef}>
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h3 className="menu-item-name">Espresso</h3>
              <p className="menu-item-description">Rich and bold</p>
              <p className="menu-item-price">$3.50</p>
            </div>
            <div className="menu-item">
              <h3 className="menu-item-name">Cappuccino</h3>
              <p className="menu-item-description">Creamy foam</p>
              <p className="menu-item-price">$4.00</p>
            </div>
            <div className="menu-item">
              <h3 className="menu-item-name">Latte</h3>
              <p className="menu-item-description">Smooth & milky</p>
              <p className="menu-item-price">$4.50</p>
            </div>
            <div className="menu-item">
              <h3 className="menu-item-name">Mocha</h3>
              <p className="menu-item-description">Chocolate delight</p>
              <p className="menu-item-price">$5.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="location">
        <div className="container">
          <h2 className="section-title">Location & Hours</h2>
          <div className="location-content">
            <div className="map-placeholder">
              <p>Map placeholder</p>
            </div>
            <div className="location-info">
              <div className="info-item">
                <h3>Address</h3>
                <p>123 Coffee St, Townsville</p>
              </div>
              <div className="info-item">
                <h3>Hours</h3>
                <p>Mon-Fri 7am–7pm</p>
                <p>Sat-Sun 8am–5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault()
            alert('Thank you for your message! We will get back to you soon.')
          }}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  )
}
