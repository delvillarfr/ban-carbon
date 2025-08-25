import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Ultra Civic"
              className="logo"
              width={1750}
              height={401}
            />
          </Link>
        </nav>
      </header>

      <main>
        <section>
          <h1>
            Burn the legal permits that polluters need to emit CO2.
          </h1>
        </section>
        <section>
          <h2>
            They're U.S. power plants who use coal, oil, or gas.
          </h2>
        </section>
      </main>

      <footer>
      </footer>
    </>
  );
}