import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Playfair_Display } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The Sunshine Collective - Permaculture design consulting and native habitat restoration. Creating regenerative landscapes that nourish people and planet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
