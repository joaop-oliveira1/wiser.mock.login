import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: absolute;
  background: rgb(19, 5, 37);
  background: linear-gradient(180deg, rgba(19, 5, 37, 1) 0%, rgba(105, 57, 153, 0.75) 20%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotate(-180deg);
  @media only screen and (min-width: 768px) {
    width: 45%;
  }
  @media only screen and (min-width: 1284px) {
    width: 55%;
    height: 100%;
  }
`;

export default ImageWrapper;
