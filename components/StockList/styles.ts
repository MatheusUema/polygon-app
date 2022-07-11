import styled from 'styled-components';

export const Container = styled.div`
  min-height: 250px;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 350px; 
`;

interface IItemListProps {
    positive?: boolean;
}

export const ItemList = styled.div<IItemListProps>`
    display: flex;
    gap: 16px;
    color: #020202;
    font-size: 14px;
    padding: 2px 8px;
    background-color: #f2f2f2;

    &:nth-child(1){
        color: white;
        background-color: #05132a;
    }

    color: ${(props) => props.positive ? 'green' : 'red'};
`;

export const TickerText = styled.strong`
    width: 45px;
`;

export const HText = styled.p`
    width: 98px;
`;

export const LText = styled.p`
    width: 98px;
`;