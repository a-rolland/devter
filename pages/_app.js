import '../styles/globals.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  ) 
}

export default MyApp
