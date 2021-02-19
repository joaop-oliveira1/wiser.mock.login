import styled from 'styled-components';

const ForgotPasswordLink = styled.a`
  display: block;
  cursor: pointer;
  width: 21em;
  height: 2.5em;
  padding-left: 0.25em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 1em;
  line-height: 1.25em;
  text-align: center;
  color: #383e71;
  @media only screen and (max-width: 1024px) {
    font-size: 1em;
    padding: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.75em;
  }
`;

export default ForgotPasswordLink;
