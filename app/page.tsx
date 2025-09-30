"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useScrolledPastTop } from '@/app/lib/useScrolledPastTop';
import EmailForm from '@/app/ui/EmailForm';

export default function Home() {
  const scrolled = useScrolledPastTop();
  return (
    <>
      <div id="sentinel"></div>

      <div className="background-wrapper">
        <div className="intro-background chimney-background">
          <div className="intro-media">
            <video
              autoPlay muted loop playsInline
              preload="metadata"
            >
              <source src="/chimney-darkgray.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="intro-background gradient-background">
          <div className="intro-media">
            <Image
              src="/rggi-power-plants.svg"
              alt="RGGI power plants"
              width={1577}
              height={887}
              className="rggi-power-plants"
            />
            <Image
              src="/rggi-power-plants-bright.svg"
              alt="RGGI power plants"
              width={1577}
              height={887}
              className="rggi-power-plants rggi-power-plants-glow"
            />
          </div>
        </div>
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
                src="/favicon-dark.svg"
                alt="BAN CARBON logo"
                width={17}
                height={17}
                className="logo"
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="inherit-dimensions">
        <section className="inherit-dimensions">
          <div className="landing-container">
            <div className="landing">
              <div className="hero">
                <h1 className="hero-line">
                  Burn the permits<br />
                  polluters need<br />
                  to emit CO<sub>2</sub>.
                </h1>
              </div>
              <EmailForm />
            </div>
          </div>
        </section>
      </main>
      {/*
        <section className="explainer-polluters">
          <div className="explainer-polluters-container">
            <h2 className="explainer-line">
              They're&nbsp;U.S. power&nbsp;plants
              that&nbsp;still&nbsp;burn fossil&nbsp;fuels.
            </h2>
          </div>
        </section>
    */}

      {/*
      <footer>
      </footer>
    */}
    </>
  );
}