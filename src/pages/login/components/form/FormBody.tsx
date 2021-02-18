import { Formik, Form } from 'formik';

export default function FormBody() {
  return (
    <Formik initialValues={{ username: '', password: '' }} validationSchema={{}} onSubmit={console.log}>
      {() => <Form></Form>}
    </Formik>
  );
}
