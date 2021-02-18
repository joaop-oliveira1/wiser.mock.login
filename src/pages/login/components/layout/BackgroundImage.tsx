import styled from 'styled-components';
import Image from 'next/image';

const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100%;
  opacity: 0.25;
  transform: rotate(-180deg);
`;

export default BackgroundImage;
