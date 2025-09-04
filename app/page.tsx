import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="background-video">
        <video
          autoPlay muted loop playsInline
          preload="metadata"
        >
          <source src="/chimney-light-lq.mp4" type="video/mp4" />
        </video>
      </div>

      <header className="navbar-container">
        <div className="navbar">
          <a href="/" className="brand">
            <Image
              src="/wordmark-dark.svg"
              alt="BAN CARBON wordmark"
              width={1750}
              height={401}
            />
          </a>
          <a
            href="https://buy.stripe.com/4gMeVe5U9eZS5KS5349bO02"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
          >
            Burn CO<sub>2</sub> permits
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-container">
            <h1 className="hero-line">
              Burn the permits<br />
              polluters need<br />
              to emit CO<sub>2</sub>.
            </h1>
          </div>
        </section>
      </main>

      <div className="container"> </div>

      {/*
      <footer>
      </footer>
    */}
    </>
  );
}