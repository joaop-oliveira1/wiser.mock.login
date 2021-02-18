import Container from './components/layout/Container';
import ImageWrapper from './components/layout/ImageWrapper';
import BackgroundImage from './components/layout/BackgroundImage';
import FormWrapper from './components/form/FormWrapper';
import FormHeader from './components/form/FormHeader';
import React from 'react';

export default function LoginPage() {
  return (
    <Container>
      <ImageWrapper>
        <BackgroundImage src="/assets/background.jpg" alt="Picture of the author" layout="fill" />
      </ImageWrapper>
      <FormWrapper>
        <FormHeader>Ola, seja bem-vindo!</FormHeader>
      </FormWrapper>
    </Container>
  );
}
