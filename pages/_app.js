import '../styles/global.css';
import { Inter } from 'next/font/google';

// Explicitly load weights 300 and 400 to match Lovable's light heading + normal body
const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400'],
  variable: '--font-inter',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return <main className={inter.variable}><Component {...pageProps} /></main>;
}
