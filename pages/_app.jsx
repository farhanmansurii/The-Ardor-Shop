import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Navbar /> <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
