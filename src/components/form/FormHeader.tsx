import styled from 'styled-components';

const FormHeader = styled.span`
  display: block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5em;
  line-height: 1.25em;
  text-align: center;
  color: #383e71;
  @media only screen and (min-width: 768px) {
    text-align: start;
    font-size: 2.5em;
    line-height: 1.5em;
  }
  @media only screen and (min-width: 1284px) {
    text-align: start;
    font-size: 3.5em;
    line-height: 1.5em;
  }
`;

//background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);

export default FormHeader;
