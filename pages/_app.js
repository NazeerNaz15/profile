import '@/styles/globals.css';
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from 'react';
import '@/styles/styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}
