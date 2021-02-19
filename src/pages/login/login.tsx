import Container from './components/layout/Container';
import ImageWrapper from './components/layout/ImageWrapper';
import BackgroundImage from './components/layout/BackgroundImage';
import FormContainer from './components/form/FormContainer';
import FormHeader from './components/form/FormHeader';
import FormSubtitle from './components/form/FormSubtitle';
import FormBody from './components/form/FormBody';
import React from 'react';
import ForgotPassword from './components/form/ForgotPassword';
import ForgotPasswordLink from './components/form/ForgotPasswordLink';

export default function LoginPage() {
  return (
    <Container>
      <ImageWrapper>
        <BackgroundImage src="/assets/background.png" />
      </ImageWrapper>
      <FormContainer>
        <FormHeader>
          Ola, seja <br /> bem-vindo!
        </FormHeader>
        <FormSubtitle>Para acessar a plataforma, faca seu login</FormSubtitle>
        <FormBody />
        <ForgotPassword>
          Esqueceu seu login ou senha?
          <ForgotPasswordLink>clique aqui</ForgotPasswordLink>
        </ForgotPassword>
      </FormContainer>
    </Container>
  );
}
