import React from 'react';

import { Container, InnerSection } from './styles';

interface IGraphContainerProps {
  children: React.ReactNode;
  graphContainerRef: React.RefObject<HTMLDivElement>;
}

export const GraphContainer = ({children, graphContainerRef}: IGraphContainerProps): JSX.Element => {

  return (
    <Container>
      <InnerSection ref={graphContainerRef} id="graph-container">
        {children}
      </InnerSection>
    </Container>
  )
};
