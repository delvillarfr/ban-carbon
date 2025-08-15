export default function Home() {
  return (
    <>
      <header>
        <img src="/logo.svg" alt="Ultra Civic" className="logo" />
      </header>
      
      <main>
        <section className="hero-line">
            <img src="/hero-1.svg" alt="" className="hero-1" />
            <img src="/hero-2.svg" alt="" className="hero-2" />
            <img src="/hero-3.svg" alt="" className="hero-3" />
            <div className="input-wrapper">
                {/*}
                  <input type="number" id="pollution-rights" min="1" max="99" value="1" className="rights-input" />
                */}
                <span className="custom-cursor">|</span>
            </div>
            <img src="/hero-4.svg" alt="" className="hero-4" />
        </section>
        
        <section className="hero-details">
            <div className="pay-section">
                <img src="/pay-1.svg" alt="" className="pay-1" />
                <span id="usd-price" className="price-value">24</span>
                <img src="/pay-2.svg" alt="" className="pay-2" />
            </div>
            
            <div className="earn-section">
                <img src="/earn-1.svg" alt="" className="earn-1" />
                <span id="pr-tokens" className="token-value">1</span>
                <img src="/earn-2.svg" alt="" className="earn-2" />
            </div>
        </section>
        
        <section className="action">
            <a href="https://buy.stripe.com/4gMeVe5U9eZS5KS5349bO02" target="_blank" className="doit-button">
                <img src="/doit.svg" alt="Do It" />
            </a>
        </section>
      </main>
    
      <footer>
          <img src="/contact.svg" alt="Contact" className="contact-info" />
      </footer>
    </>
  );
}
