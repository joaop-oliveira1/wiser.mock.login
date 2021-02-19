import styled from 'styled-components';

export interface BlankSpaceProps {
  size: number;
}

const BlankSpace = styled.div<BlankSpaceProps>`
  height: ${(props) => `${props.size}em`};
  @media (max-width: 72.5em) {
    height: ${(props) => `${props.size / 2}em`};
  }
`;

export default BlankSpace;
