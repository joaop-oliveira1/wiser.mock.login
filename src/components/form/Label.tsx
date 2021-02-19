import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75em;
  line-height: 3em;
  display: flex;
  align-items: center;
  color: #383e71;
  margin-top: 0.5em;
  @media only screen and (min-width: 768px) {
    margin: 1;
    width: 24em;
  }
  @media only screen and (min-width: 1284px) {
    margin: 1.5;
    width: 30em;
  }
`;

export default Label;
