import styled from 'styled-components';

const FormWrapper = styled.div`
  position: absolute;
  left: 72.5em;
  @media only screen and (max-width: 1024px) {
    margin-top: 20em;
    margin-left: 3em;
    left: 32em;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 3.5em;
    margin-top: 15em;
    left: 23.5em;
  }
`;

export default FormWrapper;
