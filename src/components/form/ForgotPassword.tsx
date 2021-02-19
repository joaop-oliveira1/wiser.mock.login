import styled from 'styled-components';

const ForgotPassword = styled.span`
  position: absolute;
  display: block;
  width: 22.5em;
  height: 2.5em;
  top: 111%;
  margin-left: 6em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 0.75em;
  line-height: 1em;
  text-align: start;
  color: white;
  @media only screen and (min-width: 768px) {
    position: relative;
    top: 0;
    margin-left: 0;
    padding-left: 1em;
    margin-top: 3em;
    font-size: 1em;
    font-weight: normal;
    color: #989fdb;
  }
  @media only screen and (min-width: 1284px) {
    position: relative;
    top: 0;
    margin-left: 0;
    padding-left: 3.5em;
    margin-top: 3em;
    font-size: 1em;
    font-weight: normal;
    color: #989fdb;
  }
`;

export default ForgotPassword;
