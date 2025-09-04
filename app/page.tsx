"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useScrolledPastTop } from '@/app/lib/useScrolledPastTop';

export default function Home() {
  const scrolled = useScrolledPastTop();
  return (
    <>
      <div id="sentinel"></div>

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
          <div className="brand-container">
            <Link href="/" className={`brand ${!scrolled ? 'fade-in' : 'fade-out'}`}>
              <Image
                src="/wordmark-dark.svg"
                alt="BAN CARBON wordmark"
                width={152}
                height={19}
                className="wordmark"
              />
            </Link>
            <Link href="/" className={`brand ${scrolled ? 'fade-in' : 'fade-out'}`}>
              <Image
                src="/logo-dark.svg"
                alt="BAN CARBON logo"
                width={17}
                height={17}
                className="logo"
              />
            </Link>
          </div>
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