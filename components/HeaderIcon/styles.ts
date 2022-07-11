import styled, { keyframes } from 'styled-components';

const chartlines = keyframes`
  0% {
      transform: scaleY(1);
  }
  32% {
      transform: scaleY(1.15)
  }
  79% {
    transform: scaleY(.9)
  }
  100% {
    transform: scaleY(1)
  }
`;


export const Container = styled.div`
    
    width: 100px;
    margin-right: 16px;
    margin-left: 22px;
    
    .chart-icon {
        width: 30px;
        margin-right: 24px;
        margin-top: 5px;
        margin-left: 24px;
    }

    .chart-scale {
        stroke: #173753;
    }

    .chart-line {
        stroke: #427AA1;
        transform-origin: bottom;
    }
    
    .chart-line:first-child {
        animation: 2.4s cubic-bezier(.49,.86,.59,.95) infinite ${chartlines};
    }

    .chart-line:nth-child(2){
        animation: 2.4s cubic-bezier(.49,.86,.59,.95) infinite reverse ${chartlines};
    }

    .chart-line:nth-child(3){
        animation: 2.4s cubic-bezier(.49,.86,.59,.95) infinite reverse ${chartlines};
    }

    .chart-line:nth-child(4){
        animation: 2.4s cubic-bezier(.49,.86,.59,.95) infinite ${chartlines};
    }
`;
