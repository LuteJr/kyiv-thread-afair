import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CatalogPreviews from '../components/homepage/CatalogPreviews';
import ContentBanner from '../components/homepage/ContentBanner';
import HomeNewsletter from '../components/homepage/HomeNewsletter';
import HomePayment from '../components/homepage/HomePayment';
import HomeSocial from '../components/homepage/HomeSocial';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Afair</title>
      </Head>

      <Header></Header>

      <main className="content mb-5">
        <ContentBanner></ContentBanner>

        <CatalogPreviews></CatalogPreviews>

        <HomeNewsletter></HomeNewsletter>

        <HomeSocial></HomeSocial>

        <HomePayment></HomePayment>
      </main>
      <Footer></Footer>
    </div>
  );
}
