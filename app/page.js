const products = [
  ["Fresh Breads", "Soft, wholesome breads made for everyday freshness."],
  ["Buns & Rolls", "Consistent quality for retail, food service and hospitality."],
  ["Cakes & Pastries", "Delicious baked treats crafted for every occasion."],
  ["Specialty Products", "A growing range designed around customer needs."]
];

const strengths = [
  ["Freshness First", "Efficient production and distribution focused on delivering fresh products."],
  ["Reliable Distribution", "A dependable supply network designed to serve customers consistently."],
  ["Quality Focus", "Strong attention to ingredients, production standards and product consistency."],
  ["Customer Partnership", "Flexible solutions built around the needs of retailers, businesses and consumers."]
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home"><span>Ali</span>Mo <small>BAKERY</small></a>
        <nav>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#why-us">Why Us</a>
          <a href="#clients">Clients</a>
          <a href="#careers">Careers</a>
          <a className="nav-cta" href="#contact">Contact Us</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">QUALITY BAKERY MANUFACTURING & DISTRIBUTION</p>
          <h1>Freshly Baked.<br/><em>Reliably Delivered.</em></h1>
          <p className="lead">AliMo Bakery is dedicated to manufacturing and distributing quality bakery products that bring freshness, taste and consistency to every customer.</p>
          <div className="actions">
            <a className="button primary" href="#products">Explore Our Products</a>
            <a className="button ghost" href="#contact">Partner With Us →</a>
          </div>
        </div>
        <div className="hero-art">
          <div className="bread one">🥖</div>
          <div className="bread two">🥐</div>
          <div className="seal">FRESH<br/><span>EVERY DAY</span></div>
          <div className="grain g1"></div><div className="grain g2"></div><div className="grain g3"></div>
        </div>
      </section>

      <section className="stats">
        <div><strong>Fresh</strong><span>Quality-focused production</span></div>
        <div><strong>Reliable</strong><span>Consistent distribution</span></div>
        <div><strong>Customer</strong><span>Driven solutions</span></div>
        <div><strong>Everyday</strong><span>Bakery goodness</span></div>
      </section>

      <section id="about" className="section about">
        <div className="section-label">01 — ABOUT ALIMO</div>
        <div className="two-col">
          <div><h2>Baking quality into <em>everyday life.</em></h2></div>
          <div>
            <p>AliMo Bakery is engaged in the manufacturing and distribution of bakery items, serving customers with products designed around freshness, quality and consistency.</p>
            <p>From production to delivery, our focus is on building a dependable bakery business that customers can trust every day.</p>
            <div className="mission-grid">
              <div><h3>Our Mission</h3><p>To provide quality bakery products and reliable service that create lasting customer relationships.</p></div>
              <div><h3>Our Vision</h3><p>To become a trusted name in bakery manufacturing and distribution through quality, innovation and service.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section products">
        <div className="section-label light">02 — OUR PRODUCTS</div>
        <h2>A range made for <em>every taste.</em></h2>
        <div className="product-grid">
          {products.map(([title, text], i) => (
            <article className="product-card" key={title}>
              <div className="product-number">0{i+1}</div>
              <div className="product-icon">{["🍞","🥯","🧁","🥨"][i]}</div>
              <h3>{title}</h3><p>{text}</p><a href="#contact">Learn More →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="why-us" className="section">
        <div className="section-label">03 — WHY CHOOSE US</div>
        <div className="two-col">
          <div><h2>Built around quality.<br/><em>Delivered with care.</em></h2></div>
          <div className="strength-list">
            {strengths.map(([title, text], i) => <div className="strength" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="clients" className="clients">
        <div>
          <p className="eyebrow">OUR CLIENTS & PARTNERS</p>
          <h2>Growing through trusted <em>partnerships.</em></h2>
          <p>We work to build strong, long-term relationships across retail, food service, hospitality and other distribution channels.</p>
        </div>
        <div className="client-grid">
          <span>RETAIL</span><span>HOSPITALITY</span><span>FOOD SERVICE</span><span>DISTRIBUTION</span>
        </div>
      </section>

      <section id="careers" className="careers">
        <p className="eyebrow">CAREERS AT ALIMO</p>
        <h2>Help us shape the future<br/>of <em>freshness.</em></h2>
        <p>We are always interested in passionate people who want to grow with a quality-focused bakery business.</p>
        <a className="button primary" href="mailto:careers@alimobakery.com">Explore Opportunities</a>
      </section>

      <section id="contact" className="contact">
        <div><div className="section-label light">06 — CONTACT US</div><h2>Let&apos;s start a <em>conversation.</em></h2><p>Interested in our products, distribution services or a business partnership? We would love to hear from you.</p></div>
        <form>
          <input placeholder="Your Name" aria-label="Your Name"/>
          <input type="email" placeholder="Email Address" aria-label="Email Address"/>
          <input placeholder="Company / Organization" aria-label="Company"/>
          <textarea placeholder="How can we help?" rows="5" aria-label="Message"></textarea>
          <button className="button primary" type="button">Send Message →</button>
        </form>
      </section>

      <footer>
        <div className="brand"><span>Ali</span>Mo <small>BAKERY</small></div>
        <p>Manufacturing freshness. Delivering quality.</p>
        <p className="muted">© {new Date().getFullYear()} AliMo Bakery. All rights reserved.</p>
      </footer>
    </main>
  );
}