import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Afair</title>
      </Head>

      <header className="header text-warning">
        Hello
        <img src="/images/logo.jpg" alt="" />
        <i className="fa-solid fa-phone"></i>
      </header>

      <main className="content"></main>

      <footer className="footer"></footer>
    </div>
  );
}
