import styled from 'styled-components';

const BackgroundImage = styled.img`
  opacity: 0.5;
  transform: rotate(-180deg);
  object-fit: cover;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 1284px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export default BackgroundImage;
