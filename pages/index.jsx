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
      <footer className="footer"></footer>
    </div>
  );
}
