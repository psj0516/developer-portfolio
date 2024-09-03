import { AppProps } from 'next/app';
import Layout from '@/components/shared/Layout';
import globalStyles from '@/styles/globalStyles';
import { Global } from '@emotion/react';
import { Fira_Code } from 'next/font/google';
import { Nanum_Gothic_Coding } from 'next/font/google';
import { IBM_Plex_Sans_KR } from 'next/font/google';

const fira = Fira_Code({
  subsets: ['latin'],
});

const nanum = Nanum_Gothic_Coding({
  preload: false,
  weight: ['400', '700'],
  variable: '--Nanum-Coding',
});

const IBM = IBM_Plex_Sans_KR({
  preload: false,
  weight: ['400', '700'],
  variable: '--IBM-Plex-Sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Global styles={globalStyles} />
        <main
          className={`${fira.className} ${nanum.variable} ${IBM.variable}`}
          style={{ height: '100%' }}
        >
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
