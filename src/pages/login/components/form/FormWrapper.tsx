import styled from 'styled-components';

const FormWrapper = styled.div`
  position: absolute;
  left: 72.5em;
  padding: 10em;

  @media (max-width: 72.5em) {
    padding-left: 1.25em;
    padding-right: 1.25em;
    padding-top: 5em;
    left: 0;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

export default FormWrapper;
