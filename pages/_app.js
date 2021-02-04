import "../styles/globals.css";
import Head from "next/head";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome | Banshee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
