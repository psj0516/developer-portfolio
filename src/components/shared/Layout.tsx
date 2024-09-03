import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Developer Portfolio</title>
        <meta name="description" content="프론트엔드 개발자 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  );
}

export default Layout;
