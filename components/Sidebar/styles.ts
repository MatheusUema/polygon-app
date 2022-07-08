import styled from 'styled-components';
import { Calendar } from 'react-calendar';

export const Container = styled.div`
  margin-top: 32px;
  margin-right: 16px;
`;

export const InputController = styled.div`
    display: flex;
`;

interface ICalendarComponentProps {
    hidden: boolean;
}

export const CalendarComponent = styled(Calendar)<ICalendarComponentProps>`
    visibility: ${(props) => props.hidden ? 'visible' : 'hidden'};
    display: ${(props) => props.hidden ? 'block' : 'none'};
    position: ${(props) => props.hidden ? 'fixed' : 'none'};
`;

export const TickerButton = styled.button`
    border: none;
    border-radius: 5px;
    color: #f2f2f2;
    background: #427AA1;
    margin: 0 8px;
    font-weight: bold;
`;