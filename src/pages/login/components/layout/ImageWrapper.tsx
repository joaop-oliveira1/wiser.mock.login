import styled from 'styled-components';

const ImageWrapper = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  position: absolute;
  width: 65em;
  height: 100%;
  transform: rotate(-180deg);
  @media only screen and (max-width: 1024px) {
    width: 28.5em;
  }
  @media only screen and (max-width: 768px) {
    width: 22.5em;
  }
`;

export default ImageWrapper;
