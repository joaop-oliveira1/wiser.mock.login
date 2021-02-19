import styled from 'styled-components';

const LoginSubmitButton = styled.button`
  border: 1px solid #989fdb;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  width: 22.5em;
  height: 3.5em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 1.25em;
  border-radius: 0.5em;
  color: #989fdb;
  transition: all ease-in 150ms;
  &:hover {
    color: #ffffff;
    background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
    box-shadow: 0px 10px 25px #cf99db;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 72.5em) {
    width: 21.5em;
  }
`;

export default LoginSubmitButton;
