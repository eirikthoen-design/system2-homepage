import '../styles/global.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function MyApp({ Component, pageProps }) {
  return <main className={inter.variable}><Component {...pageProps} /></main>;
}
