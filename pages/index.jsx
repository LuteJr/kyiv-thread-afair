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
      <div className="badge">20off</div>
      <div className="badge badge-secondary">new entry</div>
      <div className="badge badge-oversized">%</div>
      <footer className="footer"></footer>
    </div>
  );
}
