import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../redux/store';
import '../styles/globals.css';
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <NextNProgress color="#FDFF00" startPosition={0.3} stopDelayMs={200} height={2} options={{ easing: 'ease', speed: 500, showSpinner: false }} showOnShallow={true} />
      <Navbar />
      <div className="pt-[4rem] font-whyte">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
