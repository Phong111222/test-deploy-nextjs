import Navbar from '../components/Navbar';
import '../styles/globals.css';
import '../styles/navbar.css';
import { Provider } from 'next-auth/client';
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;