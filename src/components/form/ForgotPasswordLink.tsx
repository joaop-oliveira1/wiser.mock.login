import styled from 'styled-components';

const ForgotPasswordLink = styled.a`
  display: block;
  cursor: pointer;
  width: 21em;
  height: 2.5em;
  margin-top: 1.5em;
  padding-right: 6em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase;
  text-decoration: underline;
  line-height: 1.25em;
  text-align: center;
  color: white;
  @media only screen and (min-width: 768px) {
    position: relative;
    top: 0;
    margin-top: 1em;
    padding-right: 6em;
    font-size: 1em;
    font-weight: normal;
    color: #383e71;
  }
  @media only screen and (min-width: 1284px) {
    position: relative;
    top: 0;
    margin-top: 1em;
    padding-right: 6em;
    font-size: 1em;
    font-weight: normal;
    color: #383e71;
  }
`;

export default ForgotPasswordLink;
