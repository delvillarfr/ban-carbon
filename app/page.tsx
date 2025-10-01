"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useScrolledPastTop } from '@/app/lib/useScrolledPastTop';
import EmailForm from '@/app/ui/EmailForm';
import { courier } from '@/app/ui/fonts';

export default function Home() {
  const scrolled = useScrolledPastTop();
  return (
    <>
      <div id="sentinel"></div>

      <div className="landing-background-wrapper">
        <div className="landing-background chimney-gray">
          <div className="landing-media shift-right">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/chimney-darkgray.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="landing-background gradient-background">
          <div className="landing-media shift-right">
            <Image
              src="/rggi-power-plants.svg"
              alt="Map of northeastern USA with chimney"
              width={1577}
              height={887}
            />
            <Image
              src="/rggi-power-plants-bright.svg"
              alt="Map of RGGI power plants sized by CO2 emissions"
              width={1577}
              height={887}
              className="top-left-position"
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

      <main >
        <section >
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
        <section >
          <div className="polluters-line">
            <div className="polluters-line-container">
              <h2 className="explainer-line">
                They&apos;re U.S.<br />
                power plants<br />
                still burning<br />
                fossil fuels.
              </h2>
            </div>
          </div>
          <div className="polluters-example">
            <div className="polluters-example-container">
              <Image
                src="/astoria.png"
                alt="Picture of Astoria Energy"
                width={340}
                height={340}
                className="polluters-example-image"
              />
              <div className={`${courier.className} polluters-info`}>
                <div className="percentage45-margin-top">
                  <p>
                    Astoria Energy
                  </p>
                </div>
                <div>
                  <p>
                    Queens, N.Y.C.
                  </p>
                </div>
                <div className="percentage10-margin-top">
                  <p>
                    CO<sub>2</sub> emissions in 2024:
                  </p>
                </div>
                <div className="percentage2-margin-top">
                  <p>
                    3.2 million tonnes
                  </p>
                </div>
                <div className="percentage2-margin-top">
                  <p>
                    = Bhutan or Iceland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}