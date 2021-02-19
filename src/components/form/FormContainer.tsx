import styled from 'styled-components';

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  top: 40%;
  left: 0;
  height: 102%;
  width: 75%;
  margin-left: 12%;
  padding: 1.5em;
  border-radius: 0.5em;
  background-color: #faf5ff;
  @media only screen and (min-width: 768px) {
    position: relative;
    align-items: flex-start;
    left: 80%;
    height: 100%;
    background-color: transparent;
  }
  @media only screen and (min-width: 1284px) {
    position: relative;
    align-items: flex-start;
    left: 100%;
    height: 100%;
    background-color: transparent;
  }
`;

export default FormContainer;
