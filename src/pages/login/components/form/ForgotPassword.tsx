import styled from 'styled-components';

const ForgotPassword = styled.span`
  display: block;
  width: 22.5em;
  height: 2.5em;
  padding: 0.5em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 1.25em;
  text-align: center;
  color: #989fdb;
  @media only screen and (max-width: 1024px) {
    padding: 0;
    margin-top: 0.5em;
    padding-right: 1.5em;
    font-size: 1em;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.75em;
  }
`;

export default ForgotPassword;
