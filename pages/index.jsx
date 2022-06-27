import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePayment from '../components/homepage/HomePayment';
import HomeSocial from '../styles/homepage/HomeSocial';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Afair</title>
      </Head>

      <Header></Header>

      <main className="content">
        <HomeSocial></HomeSocial>
        <HomePayment></HomePayment>
      </main>
      <Footer></Footer>
    </div>
  );
}
