import Container from '../../components/layout/Container';
import ImageWrapper from '../../components/layout/ImageWrapper';
import BackgroundImage from '../../components/layout/BackgroundImage';
import FormContainer from '../../components/form/FormContainer';
import FormHeader from '../../components/form/FormHeader';
import FormSubtitle from '../../components/form/FormSubtitle';
import React, { useEffect } from 'react';
import ForgotPassword from '../../components/form/ForgotPassword';
import ForgotPasswordLink from '../../components/form/ForgotPasswordLink';
import { Form, Formik, FormikHelpers } from 'formik';
import Input from '../../components/form/Input';
import LoginSubmitButton from '../../components/form/LoginSubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { LoginDto, LoginPayloadObject } from '../../domain/dto/login.dto';
import { loginSagaAttempt } from '../../redux/auth/slice';
import { SuccessNotification } from '../../components/layout/ToastNotification';
import { selectUser } from '../../redux/auth/selectors';

export default function LoginPage() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function userIsDefined(): boolean {
    if (user) return true;
    return false;
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Este campo e obrigatorio!')
      .email('Por favor digite um email valido, como exemplo: seu@email.com'),
    password: Yup.string().required('Este campo e obrigatorio!'),
  });

  function handleSubmit(values: LoginPayloadObject, helpers: FormikHelpers<LoginPayloadObject>) {
    const loginDto = LoginDto.fromJson(values);
    dispatch(loginSagaAttempt(loginDto));
    helpers.resetForm();
  }

  useEffect(() => {
    if (userIsDefined()) SuccessNotification(`Bem vindo, ${user.name}`).then();
  }, [user])

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
        <Formik initialValues={{ username: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <Input name="username" label="E-MAIL" placeholder="seu@email.com" />
              <Input name="password" label="SENHA" placeholder="Digite sua senha..." type="password" />
              <LoginSubmitButton>ENTRAR</LoginSubmitButton>
            </Form>
          )}
        </Formik>
        <ForgotPassword>
          Esqueceu seu login ou senha?
          <ForgotPasswordLink>clique aqui</ForgotPasswordLink>
        </ForgotPassword>
      </FormContainer>
    </Container>
  );
}
