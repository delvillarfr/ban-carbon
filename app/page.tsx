import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header>
        <Image
          src="/logo.svg"
          alt="Ultra Civic"
          className="logo"
          width={1750}
          height={401}
        />
      </header>
      
      <main>
        <section className="hero-line">
            <Image
              src="/hero-1.svg"
              alt=""
              className="hero-1"
              width={275}
              height={50}
            />
            <Image
              src="/hero-2.svg"
              alt=""
              className="hero-2"
              width={524}
              height={50}
            />
            <Image
              src="/hero-3.svg"
              alt=""
              className="hero-3"
              width={160}
              height={49}
            />
            <div className="input-wrapper">
                {/*}
                  <input type="number" id="pollution-rights" min="1" max="99" value="1" className="rights-input" />
                */}
                <span className="custom-cursor">|</span>
            </div>
            <Image
              src="/hero-4.svg"
              alt=""
              className="hero-4"
              width={284}
              height={57}
            />
        </section>
        
        <section className="hero-details">
            <div className="pay-section">
                <Image
                  src="/pay-1.svg"
                  alt=""
                  className="pay-1"
                  width={86}
                  height={37}
                />
                <span id="usd-price" className="price-value">24</span>
                <Image
                  src="/pay-2.svg"
                  alt=""
                  className="pay-2"
                  width={54}
                  height={30}
                />
            </div>
            
            <div className="earn-section">
                <Image
                  src="/earn-1.svg"
                  alt=""
                  className="earn-1"
                  width={109}
                  height={37}
                />
                <span id="pr-tokens" className="token-value">1</span>
                <Image
                  src="/earn-2.svg"
                  alt=""
                  className="earn-2"
                  width={33}
                  height={31}
                />
            </div>
        </section>
        
        <section className="action">
            <a href="https://buy.stripe.com/4gMeVe5U9eZS5KS5349bO02" target="_blank" className="doit-button">
                <Image
                  src="/doit.svg"
                  alt="Do It"
                  width={404}
                  height={217}
                />
            </a>
        </section>
      </main>
    
      <footer>
          <Image
            src="/contact.svg"
            alt="Contact"
            className="contact-info"
            width={447}
            height={29}
          />
      </footer>
    </>
  );
}
