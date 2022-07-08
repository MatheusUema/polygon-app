import React from 'react';

import { GraphContainer } from '../GraphContainer';
import { Container } from './styles';

export const MainSection = (): JSX.Element => {

  return (
    <Container>
      <GraphContainer />
    </Container>
  )
};

export default MainSection;