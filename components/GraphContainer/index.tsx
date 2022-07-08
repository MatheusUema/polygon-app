import React from 'react';
import Plot from 'react-plotly.js';
import { useAggregate } from '../../pages/hooks/useAggregate';

import { Container, InnerSection } from './styles';



export const GraphContainer = (): JSX.Element => {
  const { aggregate } = useAggregate();

  return (
    <Container>
      <InnerSection id="graph-container">
        {aggregate && 
         <Plot
          data={[
          { x: aggregate.dates,
            close: aggregate.close,
            high: aggregate.high,
            low: aggregate.low,
            open: aggregate.open,
            type: 'ohlc',
            xaxis: 'x',
            yaxis: 'y',
            increasing: {line: {color: 'black'}},
            decreasing: {line: {color: 'red'}},
          }]}
          layout={ {width: 868, height: 360, title: 'A Fancy Plot'} }

       />}
      </InnerSection>
    </Container>
  )
};
