import styled from 'styled-components';

const ErrorMessage = styled.span`
  padding: 0;
  margin-left: 1em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 0.5em;
  line-height: 2em;
  display: flex;
  align-items: center;
  color: #ff377f;
  @media only screen and (min-width: 768px) {
    line-height: 2.75em;
  }
  @media only screen and (min-width: 1284px) {
    line-height: 3.75em;
  }
`;

export default ErrorMessage;
