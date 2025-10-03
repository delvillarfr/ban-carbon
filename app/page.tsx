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
        <div className="gradient-background">
          <div className="landing-background">
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
                <div className="percentage7-margin-top">
                  <p>
                    CO<sub>2</sub> emissions, 2024:
                  </p>
                </div>
                <div>
                  <p>
                    3.2 million tonnes
                  </p>
                </div>
                <div>
                  <p>
                    = Bhutan or Iceland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="permits-line">
            <div className="permits-line-container">
              <h2 className="explainer-line">
                They need a state permit<br />
                to emit each ton of CO<sub>2</sub>.
              </h2>
            </div>
          </div>
          <div className="laws-container">
            <div className="law law-1">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    The Delaware Code
                  </div>

                  <div className="section-header">
                    Title 7, 1147 CO2 Budget Trading Program
                  </div>

                  <p className="document-body">
                    1.5.3 Co2 requirements<br />
                    1.5.3.1 The owners and operators of
                    <span className="highlight">
                      each CO2 budget source and each CO2 budget unit at the source
                    </span>
                    <span className="highlight">
                      shall hold CO2 allowances
                    </span>
                    available for compliance deductions under subsection 6.5, as of the CO2 allowance
                    transfer deadline, in the source's compliance account
                    <span className="highlight">
                      in an amount not less than the total CO2 emissions
                    </span>
                    for the control period from all CO2 budget units at the source, less the CO2 allowances deducted to meet
                    the requirements of subsection 1.5.3.2, with respect to the previous
                    two interim control periods, as determined in accordance with Sections
                    6.0 and 8.0
                  </p>
                </div>
            </div>
            <div className="law law-2">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    Maine Department of Environmental Protection
                  </div>
                  <div className="section-header">
                    Chapter 156: CO2 Budget Trading Program
                  </div>
                  <p className="document-body">
                    5.C. CO2 Budget Unit Compliance Account Requirements<br />
                    (1) For each control period, the owners and operators of
                    <span className="highlight">
                      each CO2 budget source
                    </span>
                    and each CO2 budget unit at the source
                    <span className="highlight">
                      shall hold CO2 allowances
                    </span>
                    available for compliance deductions under subsection 5(D)
                    of this Chapter, as of the CO2 allowance transfer deadline, in the
                    source's compliance account
                    <span className="highlight">
                      in an amount not less than the total CO2 emissions
                    </span>
                    for the control period from all CO2 budget units at the
                    source, less the CO2 allowances deducted to meet the requirements of
                    subsection 5(C)(2) of this Chapter, with respect to the previous two
                    interim control periods, as determined in accordance with sections 4
                    and 7 of this Chapter.
                  </p>
                </div>
            </div>
            <div className="law law-3">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    New Hampshire Code of Administrative Rules
                  </div>
                  <div className="section-header">
                    Chapter Env-A 4600 Carbon Dioxide (CO2) Budget Trading Program
                  </div>
                  <p className="document-body">
                    Env-A 4603.04 Operating Permits<br />
                    The operating permit for each budget source shall contain provisions
                    for implementation of the CO2 budget trading program, as follows:
                    (a) The requirement that
                    <span className="highlight">
                      each CO2 budget unit at the source shall hold CO2 allowances
                    </span>
                    available for compliance deductions under Env-A
                    4605.04, as of the CO2 allowance transfer deadline, in the source's compliance account,
                    <span className="highlight">
                      in an amount not less than the total CO2 emissions from fossil fuel-fired generation
                    </span>
                    for the control period from all CO2 budget units at the source,
                    less the CO2 allowances deducted to meet the requirements of paragraph (b), as determined in accordance with
                    Env-A 4605, Env-A 4607, and Env-A 4609.18; and...
                  </p>
                </div>
            </div>
            <div className="law law-4">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    Code of Massachusetts Regulations
                  </div>
                  <div className="section-header">
                    310 CMR 7.70: Massachusetts CO2 Budget Trading Program
                  </div>
                  <p className="document-body">
                    (1)(e)3. CO2 Requirements<br />
                    a. The owners and operators of
                    <span className="highlight">
                      each CO2 budget source
                    </span>
                    and each CO2 budget unit at the source 
                    <span className="highlight">
                      shall hold CO2 allowances available
                    </span>
                    for compliance deductions under 310 CMR 7.70(6)(e), as of the CO2
                    allowance transfer deadline, in the source's compliance account
                    <span className="highlight">
                      in an amount not less than the total CO2 emissions
                    </span>
                    for the control period from all CO2 budget units at the source, minus the CO2 allowances
                    deducted to meet the requirements of 310 CMR 7.70(1)(e)3.b., as
                    determined in accordance with 310 CMR 7.70(6) and (8).
                  </p>
                </div>
            </div>
            <div className="law law-5">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    Code of Vermont Rules
                  </div>
                  <div className="section-header">
                    Section 12 031 002 - CO2 Budget Trading Program
                  </div>
                  <p className="document-body">
                    105 (c) CO2 requirements<br />
                    (1) The owners and operators of
                    <span className="highlight">
                      each CO 2 budget source
                    </span>
                    and each CO 2 budget unit at the source
                    <span className="highlight">
                      shall hold CO 2 allowances
                    </span>
                    available for compliance deductions under section 23-605, as of the CO 2 allowance
                    transfer deadline, in the source's compliance account
                    <span className="highlight">
                      in an amount not less than the total CO 2 emissions
                    </span>
                    for the control period from all CO 2 budget units at the source,
                    less the CO 2 allowances deducted to meet the requirements of
                    subdivision 23-105(c)(2), with respect to the previous two
                    interim control periods, as determined in accordance with
                    Subchapters VI and VIII.
                  </p>
                </div>
            </div>
            <div className="law law-6">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    Code of Maryland Regulations
                  </div>
                  <div className="section-header">
                    Title 26, Part 2, Subtitle 09. Maryland CO2 Budget Trading Program
                  </div>
                  <p className="document-body">
                    02.03.K. Demonstrating Compliance<br />
                    (1) Unless otherwise specified in this chapter,
                    <span className="highlight">
                      a CO2 budget source shall demonstrate compliance with its CO2 budget emissions limitation by holding one CO2 allowance in its compliance account for every ton of CO2 that it emits
                    </span>
                    in a control period, by the allowance transfer deadline for that control period.
                  </p>
                </div>
            </div>
            <div className="law law-7">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    The New Jersey Administrative Code
                  </div>
                  <div className="section-header">
                    7:27C New Jersey Carbon Dioxide (CO2) Budget Trading Program
                  </div>
                  <p className="document-body">
                    7:27C-1.4 General provisions<br />
                    (f) The owners and operators of
                    <span className="highlight">
                      each CO2 budget source and each CO2 budget unit at the source shall, as of the CO2 allowance transfer deadline,
                    </span>
                    <span className="highlight">
                      hold CO2 allowances
                    </span>
                    in the source's compliance account, available for compliance deductions under N.J.A.C. 7:27C-6.9, as
                    follows: <br />
                    1. ... <br />
                    2. In the case of a control period,
                    <span className="highlight">
                      the number of CO2 allowances held shall be no less than the total CO2 emissions
                    </span>
                    for the control period from all CO2 budget units at the source, less the CO2
                    allowances deducted to meet the requirements of (f)3 below, with
                    respect to the previous two interim control periods, as determined in
                    accordance with N.J.A.C. 7:27C-6 and 8; and <br />
                    3. ...
                  </p>
                </div>
            </div>
            <div className="law law-8">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    Regulations of Connecticut State Agencies
                  </div>
                  <div className="section-header">
                    Sec. 22a-174-31. Control of carbon dioxides emissions
                  </div>
                  <p className="document-body">
                    (b)(3) General Provisions and CO2 Requirements<br />
                    (A) The owners and operators of
                    <span className="highlight">
                      each CO2 budget source shall hold CO2 allowances
                    </span>
                    available for compliance deductions under subsection (g)(5)
                    of this section, not later than the CO2 allowance transfer deadline,
                    in the source's compliance account
                    <span className="highlight">
                      in an amount equal to or greater than the total CO2 emissions
                    </span>
                    for each control period and each interim control period from all CO2 budget units at the source, as determined
                    in accordance with subsections (g) and (i) of this section...
                  </p>
                </div>
            </div>
            <div className="law law-9">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    New York Codes, Rules, and Regulations
                  </div>
                  <div className="section-header">
                    6 CRR-NY III A 242: CO2 Budget Trading Program
                  </div>
                  <p className="document-body">
                    242-1.5 (c) CO2 requirements<br />
                    (1) The owners and operators of
                    <span className="highlight">
                    each CO2 budget source
                    </span>
                    and each CO2 budget unit at the source
                    <span className="highlight">
                    shall hold CO2 allowances
                    </span>
                    available for compliance deductions under section 242-6.5 of this Part,
                    as of the CO2 allowance transfer deadline,
                    in the source's compliance account
                    <span className="highlight">
                    in an amount not less than the total CO2 emissions
                    </span>
                    for the control period from all CO2 budget units at the source,
                    less the CO2 allowances deducted to meet the requirements
                    of paragraph (2) of this subdivision with respect to the
                    previous two interim control periods,
                    as determined in accordance with Subparts 242-6 and 242-8 of this Part.
                  </p>
                </div>
            </div>
            <div className="law law-10">
                <div className={`document-content ${courier.className}`}>
                  <div className="document-title">
                    Rhode Island Code of Regulations
                  </div>
                  <div className="section-header">
                    250-RICR-120-05-46, 'CO2 Budget Trading Program'
                  </div>
                  <p className="document-body">
                    46.7 A.Carbon dioxide requirements<br />
                    1.The owners and operators of
                    <span className="highlight">
                      each CO2 budget source
                    </span>
                    and each CO2 budget unit at the source
                    <span className="highlight">
                      shall hold CO2 allowances
                    </span>
                    available for compliance deductions, under § 46.12.5 of this Part, as of the CO2
                    allowance transfer deadline, as defined in § 46.5(A)(22) of this Part,
                    in the source's compliance account
                    <span className="highlight">
                      in an amount not less than the total CO2 emissions for the control period
                    </span>
                    from all CO2 budget units at the source, less the CO2 allowances deducted to meet the
                    requirements, with respect to the previous interim control periods, as
                    determined in accordance with &sect;&sect; 46.12 through 46.14 of this Part.
                  </p>
                </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}