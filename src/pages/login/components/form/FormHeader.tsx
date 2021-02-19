import styled from 'styled-components';

const FormHeader = styled.span`
  display: block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 3em;
  line-height: 1.25em;
  color: #383e71;
  @media only screen and (max-width: 1024px) {
    font-size: 3em;
  }
  @media only screen and (max-width: 770px) {
    font-size: 2em;
  }
`;

export default FormHeader;
