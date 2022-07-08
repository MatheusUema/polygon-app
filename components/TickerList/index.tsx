import React from 'react';

// import { Container } from './styles';
import { Stock} from '../StockList';

interface ITickerListProps {
    stockList: Stock[];
    tickerRef: React.RefObject<HTMLInputElement>;
}

export const TickerList = ({stockList, tickerRef}: ITickerListProps): JSX.Element => {
  return (
    <>
        <input ref={tickerRef} list="tickerList" placeholder="Search ticker" />
        <datalist id="tickerList">
            {stockList && stockList.map((stock) => { return <option value={stock.name} key={stock.name} />})}
        </datalist>  
    </>
  )
};