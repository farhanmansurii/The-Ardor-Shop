import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../redux/store';
import '../styles/globals.css';
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <NextNProgress color="#F2f2f2" startPosition={0.3} stopDelayMs={200} height={2} options={{ easing: 'ease', speed: 500, showSpinner: false }} showOnShallow={true} />
      <Navbar />
      <div className=" font-ibm">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
