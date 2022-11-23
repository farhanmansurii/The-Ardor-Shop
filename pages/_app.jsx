import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../redux/store';
import '../styles/globals.css';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <Provider store={store}>
        <NextUIProvider>
          <Navbar />
          <div className='pt-[4rem]'>
             <Component {...pageProps} />
            </div>
        </NextUIProvider>
      </Provider>
  );
}

export default MyApp;
