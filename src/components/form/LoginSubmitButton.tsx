import styled from 'styled-components';

const LoginSubmitButton = styled.button`
  position: absolute;
  cursor: pointer;
  height: 3em;
  width: 12em;
  margin-left: 1.5em;
  margin-top: 0.5em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 1.25em;
  border-radius: 0.5em;
  border: none;
  color: #ffffff;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  transition: all ease-in 150ms;
  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 768px) {
    position: relative;
    width: 18em;
    height: 3.5em;
    margin: 1em 0 0 0;
    box-sizing: border-box;
    box-shadow: 0px 10px 25px #cf99db;
    border: 1px solid #989fdb;
  }

  @media only screen and (min-width: 1284px) {
    position: relative;
    height: 100%;
    width: 23em;
    height: 3.5em;
    box-sizing: border-box;
    box-shadow: 0px 10px 25px #cf99db;
    border: 1px solid #989fdb;
  }
`;

export default LoginSubmitButton;
