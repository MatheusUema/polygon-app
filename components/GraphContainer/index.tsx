import React from 'react';
import Plot from 'react-plotly.js';
import { useAggregate } from '../../hooks/useAggregate';

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
            increasing: {line: {color: '#002e5c '}},
            decreasing: {line: {color: '#7F7F7F'}}, 
          }]}
          layout = {{
            dragmode: 'zoom',
            showlegend: false,
            xaxis: {
            autorange: true,
            title: aggregate.name + ' OHLC Chart',
             rangeselector: {
                  x: 0,
                  y: 1.2,
                  xanchor: 'left',
                  font: {size:12},
                  buttons: [{
                      step: 'month',
                      stepmode: 'backward',
                      count: 1,
                      label: '1 month'
                  }, {
                      step: 'month',
                      stepmode: 'backward',
                      count: 6,
                      label: '6 months'
                  }, {
                      step: 'all',
                      label: 'All dates'
                  }]
                }
            },
            yaxis: {
              autorange: true,
            }
          }}
          

       />}
      </InnerSection>
    </Container>
  )
};
