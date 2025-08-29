import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <section className="landing">
          <video
           className="background-video"
           autoPlay muted loop playsInline
           preload="metadata"
           poster="/ravenswood-poster.jpg"
          >
            <source src="/ravenswood.mp4" type="video/mp4" />
          </video>
          <header>
            <Image
              src="/logo.svg"
              alt="Ultra Civic"
              className="logo"
              width={1750}
              height={401}
            />
          </header>
          <div className="hero">
            <h1>
              Burn the legal permits<br />
              that polluters need<br />
              to emit CO<sub>2</sub>.
            </h1>
          </div>
          <div className="cta">
            <a
              href="https://buy.stripe.com/4gMeVe5U9eZS5KS5349bO02"
              target="_blank"
              rel="noopener noreferrer"
            >
              Burn CO<sub>2</sub> permits now.
            </a>
          </div>
        </section>

        <section>
          <h2>
          </h2>
        </section>
      </main>

      <footer>
      </footer>
    </>
  );
}