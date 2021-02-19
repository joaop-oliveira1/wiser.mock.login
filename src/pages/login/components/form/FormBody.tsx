import * as Yup from 'yup';
import { Formik, Form, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { LoginDto, LoginPayloadObject } from '../../../../domain/dto/login.dto';
import { loginSagaAttempt } from '../../../../redux/auth/slice';
import LoginSubmitButton from './LoginSubmitButton';
import BlankSpace from '../../../../components/BlankSpace';
import Input from '../../../../components/Input';

export default function FormBody() {
  const dispatch = useDispatch();

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

  return (
    <Formik initialValues={{ username: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Input name="username" label="E-MAIL" placeholder="seu@email.com" />
          <Input name="password" label="SENHA" placeholder="Digite sua senha..." type="password" />
          <BlankSpace size={2} />
          <LoginSubmitButton>Acessar</LoginSubmitButton>
        </Form>
      )}
    </Formik>
  );
}
