import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './login/login';

const GlobalStyle = createGlobalStyle`
  body { 
    background: #FAF5FF;
  };
`;
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <LoginPage />
    </>
  );
}
