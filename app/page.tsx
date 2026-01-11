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
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-badge">Est. 2010</div>
          <h1 className="hero-headline">
            <span className="hero-line-1">Fresh Coffee,</span>
            <span className="hero-line-2">Made Daily</span>
          </h1>
          <p className="hero-subheadline">Visit Fresh Coffee for the best espresso in town</p>
          <button className="cta-button" onClick={scrollToMenu}>
            <span>View Menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-number">14</div>
            <div className="about-text-wrapper">
              <h2 className="section-title-left">Our Story</h2>
              <p className="about-text">
                Since 2010, we've been serving the community with locally roasted beans and handcrafted drinks. Every cup tells a story of passion, quality, and dedication to the craft of coffee making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu" ref={menuRef}>
        <div className="container">
          <div className="menu-header">
            <span className="section-label">Menu</span>
            <h2 className="section-title-large">Our Signature Drinks</h2>
          </div>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-item-number">01</div>
              <div className="menu-item-content">
                <h3 className="menu-item-name">Espresso</h3>
                <p className="menu-item-description">Rich and bold</p>
                <p className="menu-item-price">$3.50</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-number">02</div>
              <div className="menu-item-content">
                <h3 className="menu-item-name">Cappuccino</h3>
                <p className="menu-item-description">Creamy foam</p>
                <p className="menu-item-price">$4.00</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-number">03</div>
              <div className="menu-item-content">
                <h3 className="menu-item-name">Latte</h3>
                <p className="menu-item-description">Smooth & milky</p>
                <p className="menu-item-price">$4.50</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-number">04</div>
              <div className="menu-item-content">
                <h3 className="menu-item-name">Mocha</h3>
                <p className="menu-item-description">Chocolate delight</p>
                <p className="menu-item-price">$5.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="location">
        <div className="container">
          <div className="location-grid">
            <div className="location-map-wrapper">
              <div className="map-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <p>Map View</p>
              </div>
            </div>
            <div className="location-info-wrapper">
              <span className="section-label">Visit Us</span>
              <h2 className="section-title-left">Location & Hours</h2>
              <div className="location-info">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>123 Coffee St, Townsville</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Hours</h3>
                    <p>Mon-Fri 7am–7pm</p>
                    <p>Sat-Sun 8am–5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-header">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title-left">Contact Us</h2>
              <p className="contact-intro">Have a question or want to reserve a table? Send us a message and we'll get back to you.</p>
            </div>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for your message! We will get back to you soon.')
            }}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} required></textarea>
              </div>
              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
