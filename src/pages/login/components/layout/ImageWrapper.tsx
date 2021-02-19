import styled from 'styled-components';

const ImageWrapper = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  position: absolute;
  width: 65em;
  height: 100%;
  transform: rotate(-180deg);
  @media (max-width: 72.5em) {
    width: 0;
  }
`;

export default ImageWrapper;
