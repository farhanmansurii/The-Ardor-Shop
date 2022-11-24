import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../redux/store';
import '../styles/globals.css';
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
          <Navbar />
          <div className="pt-[4rem] font-whyte">
            <Component {...pageProps} />
        </div>
    </Provider>
  );
}

