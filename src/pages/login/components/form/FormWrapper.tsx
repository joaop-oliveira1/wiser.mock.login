import styled from 'styled-components';

const FormWrapper = styled.div`
  position: relative;
  margin-top: 15em;
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
  @media only screen and (max-width: 375px) {
    background-color: #faf5ff;
    border-radius: 0.5em;
    margin: 13em 0 0 3em;
    padding: 1em;
    height: 50%;
    width: 75%;
    left: 0;
  }
`;

export default FormWrapper;
