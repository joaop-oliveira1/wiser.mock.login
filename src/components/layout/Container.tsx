import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1284px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Container;
