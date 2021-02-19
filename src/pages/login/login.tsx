import Container from './components/layout/Container';
import ImageWrapper from './components/layout/ImageWrapper';
import BackgroundImage from './components/layout/BackgroundImage';
import FormWrapper from './components/form/FormWrapper';
import FormHeader from './components/form/FormHeader';
import FormSubtitle from './components/form/FormSubtitle';
import FormBody from './components/form/FormBody';
import BlankSpace from '../../components/BlankSpace';
import React from 'react';
import ForgotPassword from './components/form/ForgotPassword';
import ForgotPasswordLink from './components/form/ForgotPasswordLink';

export default function LoginPage() {
  const BreakOneLine = () => <br />;
  const BreakTwoLines = () => (
    <>
      <br />
      <br />
    </>
  );
  return (
    <Container>
      <ImageWrapper>
        <BackgroundImage src="/assets/background.png" alt="Picture of the author" layout="fill" />
      </ImageWrapper>
      <FormWrapper>
        <FormHeader>Ola, seja </FormHeader>
        <FormHeader>bem-vindo!</FormHeader>
        <BreakTwoLines />
        <FormSubtitle>Para acessar a plataforma,</FormSubtitle>
        <FormSubtitle>faca seu login</FormSubtitle>
        <BlankSpace size={4} />
        <FormBody />
        <BreakOneLine />
        <ForgotPassword>Esqueceu seu login ou senha? Clique</ForgotPassword>
        <ForgotPasswordLink>AQUI!</ForgotPasswordLink>
      </FormWrapper>
    </Container>
  );
}
