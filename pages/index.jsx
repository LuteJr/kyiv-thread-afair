import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Afair</title>
      </Head>

      <Header></Header>

      <main className="content"></main>
      <div className="badge">20off</div>
      <div className="badge badge-secondary">new entry</div>
      <div className="badge badge-oversized">%</div>

      <div>
        <a href="/" className="button">
          Test button
        </a>
      </div>

      <div>
        <a href="/" className="button button-large">
          Test button
        </a>
      </div>

      <footer className="footer"></footer>
    </div>
  );
}
