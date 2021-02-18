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
      <GlobalStyle />
      <LoginPage />
    </>
  );
}
