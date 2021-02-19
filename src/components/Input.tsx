import styled from 'styled-components';
import { useField } from 'formik';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

interface StyledInputProps {
  invalid: boolean;
}

export interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  display: block;
  border: ${(props) => (props.invalid ? `1px solid#FF377F` : '1px solid #989fdb')};
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75em;
  line-height: 3em;
  padding: 1em;
  width: 30em;
  &:focus {
    outline: none;
  }
  @media (max-width: 72.5em) {
    width: 28.5em;
  }
`;

export default function Input(props: InputProps) {
  const [field, meta] = useField(props.name);

  function hasError(): boolean {
    return meta.error && meta.touched;
  }

  return (
    <>
      <Label>{props.label}</Label>
      <StyledInput {...field} {...props} invalid={hasError()} />
      {hasError() && <ErrorMessage>{`${meta.error ? meta.error : ''}`}</ErrorMessage>}
    </>
  );
}
