import React from 'react';

import { Container, Items, ItemList, TickerText, HText, LText } from './styles';

export interface Stock {
    name: string;
    highestPrice: number;
    lowestPrice: number;
    transactions: number;
    openPrice: number;
}

interface IStockListProps {
    stockList: Stock[];
}

export const StockList = ({stockList}: IStockListProps): JSX.Element => {

  return (
    <Container>
        <Items>
            <ItemList>
                <TickerText>Ticker</TickerText>
                <HText>Highest Price</HText>
                <LText>Lowest Price</LText>
            </ItemList>
            {stockList && stockList.map(element => 
            <ItemList key={element.name} positive={element.highestPrice > element.lowestPrice}>
                <TickerText>{element.name}</TickerText>
                <HText>{element.highestPrice}</HText>
                <LText>{element.lowestPrice}</LText>
            </ItemList> )}
        </Items>
    </Container>
  )
};
