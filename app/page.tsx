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
        <section className="hero-container">
          <div>
            <h1 className="hero-line-1">
              Polluters need legal permits to emit&nbsp;CO<sub>2</sub>.
            </h1>
            <h1 className="hero-line-2">
              Retire them now.
            </h1>
          </div>
        </section>
        
        <section className="action">
            <a
              href="https://buy.stripe.com/4gMeVe5U9eZS5KS5349bO02"
              target="_blank"
              className="doit-button"
            >
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
        <p>
          <a href="https://calendly.com/paco-ultracivic/30min" target="_blank">
            Click here
          </a>
          &ensp;to schedule a meeting.
        </p>
        <p>
          Chat with us:&ensp;
          <a href="mailto:paco@ultracivic.com">
            paco@ultracivic.com
          </a>
        </p>
      </footer>
    </>
  );
}
