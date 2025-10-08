"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useScrolledPastTop } from '@/app/lib/useScrolledPastTop';
import EmailForm from '@/app/ui/EmailForm';
import { courier } from '@/app/ui/fonts';
import Smokestack from '@/public/rggi-power-plants.svg';
import Law from '@/app/ui/Law';
import { lawsData } from '@/app/lib/lawsData';
import Counter from '@/app/ui/Counter';

export default function Home() {
  const scrolled = useScrolledPastTop();
  return (
    <>
      <div id="sentinel"></div>

      <div className="background-wrapper">
        <div className="smokestack-background">
          <div className="smokestack shift-right">
            <video
              className="smokestack-video" autoPlay muted loop playsInline
              preload="metadata"
            >
              <source src="/chimney-darkgray.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="background">
          <div className="media shift-right">
            <Smokestack />
            <Image
              src="/rggi-power-plants-bright.svg"
              alt="Map of RGGI power plants sized by CO2 emissions"
              width={1183}
              height={665}
              className="top-left-position"
            />
          </div>
          <div className="stockpile-container">
            <div className="stockpile">
              <Image
                src="/stockpile.svg"
                alt="Stockpile"
                width={3400}
                height={1913}
              />
            </div>
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
                width={20}
                height={20}
                className="logo"
              />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section>
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
        <section>
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
          <div className="polluter-card">
            <div className="polluter-card-container">
              <Image
                src="/astoria.png"
                alt="Picture of Astoria Energy"
                width={340}
                height={340}
                className="polluter-card-image"
              />
               <div className={`${courier.className} polluter-info`}>
                <div className="percentage45-margin-top">
                  <p>Astoria Energy</p>
                </div>
                <div>
                  <p>Queens, N.Y.C.</p>
                </div>
                <div className="percentage7-margin-top">
                  <p>CO<sub>2</sub> emissions in 2024:</p>
                </div>
                <div>
                  <p>3.2 million tonnes</p>
                </div>
                <div>
                  <p>= Bhutan or Iceland</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="permits-laws-section">
            <div className="permits-line">
              <div className="permits-line-container">
                <h2 className="explainer-line">
                  They need one <br />
                  state permit to emit<br />
                  each ton of CO<sub>2</sub>.
                </h2>
              </div>
            </div>
            <div className={`laws-container ${courier.className}`}>
              <div className="folder">
                <div className="tab-bar worn-paper">
                  <input type="radio" name="state-tab" id="tab-ct" />
                  <input type="radio" name="state-tab" id="tab-de" />
                  <input type="radio" name="state-tab" id="tab-ma" />
                  <input type="radio" name="state-tab" id="tab-md" />
                  <input type="radio" name="state-tab" id="tab-nh" defaultChecked />
                  <input type="radio" name="state-tab" id="tab-nj" />
                  <input type="radio" name="state-tab" id="tab-ny" />
                  <input type="radio" name="state-tab" id="tab-ri" />
                  <input type="radio" name="state-tab" id="tab-vt" />
                  <label htmlFor="tab-ct">CT</label>
                  <label htmlFor="tab-de">DE</label>
                  <label htmlFor="tab-ma">MA</label>
                  <label htmlFor="tab-md">MD</label>
                  <label htmlFor="tab-nh">NH</label>
                  <label htmlFor="tab-nj">NJ</label>
                  <label htmlFor="tab-ny">NY</label>
                  <label htmlFor="tab-ri">RI</label>
                  <label htmlFor="tab-vt">VT</label>
                </div>
                <div className="folder-background worn-paper"></div>
                <Law lawData={lawsData[0]} />
                <Law lawData={lawsData[1]} />
                <Law lawData={lawsData[2]} />
                <Law lawData={lawsData[3]} />
                <Law lawData={lawsData[4]} />
                <Law lawData={lawsData[5]} />
                <Law lawData={lawsData[6]} />
                <Law lawData={lawsData[7]} />
                <Law lawData={lawsData[8]} />
                <Law lawData={lawsData[9]} />
                <Law lawData={lawsData[6]} className="law-placeholder" />
              </div>
            </div>
            <div className={`counter-container ${courier.className}`}>
              <div className="counter-labels">
                <div>
                  Live emissions<br />
                  (2025, tons CO2)
                </div>
                <div className="counter-divider"></div>
                <div className="counter-label-right">
                  Permits they<br />
                  must obtain
                </div>
              </div>
              <Counter className="counter-number" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}