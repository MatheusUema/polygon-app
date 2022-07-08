import React from 'react';

import { GraphContainer } from '../GraphContainer';
import { Container } from './styles';

interface IMainSectionProps {
  graphContainerRef: React.RefObject<HTMLDivElement>;
}

export const MainSection = ({graphContainerRef}: IMainSectionProps): JSX.Element => {

  return (
    <Container>
      <GraphContainer graphContainerRef={graphContainerRef} >
      </GraphContainer>
    </Container>
  )
};

export default MainSection;