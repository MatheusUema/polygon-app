import React, { useEffect, useState, useCallback, useRef } from 'react';

import { Container, InputController, CalendarComponent, TickerButton } from './styles';
import { Loader} from '../Loader';
import {StockList, Stock } from '../StockList';
import { TickerList } from '../TickerList';
import 'react-calendar/dist/Calendar.css';
import { BsCalendar3 } from 'react-icons/bs';

import { getGroupedDaily } from '../../pages/api/getGroupedDaily';
interface ISidebarProps {
  graphContainerRef: React.RefObject<HTMLDivElement>;
}

export const Sidebar = ({graphContainerRef}: ISidebarProps): JSX.Element => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [calendar, setCalendar] = useState<boolean>(false);
  const [chosenDate, setChosenDate] = useState<Date>(new Date);
  const [loading, setLoading] = useState<boolean>(false);
  const tickerRef = useRef<HTMLInputElement>(null);

  const generateChart = useCallback((value) => {
    console.log(value);
    console.log(tickerRef.current.value)
    console.log(graphContainerRef)
  }, []);

  useEffect(() => {
    setStocks([])
    setLoading(true);
    getGroupedDaily(chosenDate).then((response) => {
        const stocksList = response.data.results;
        for(let i = 0; i < response.data.results.length; i++){
            setStocks(stocks => [...stocks, {name: stocksList[i].T, highestPrice: stocksList[i].h, lowestPrice: stocksList[i].l, openPrice: stocksList[i].n, transactions: stocksList[i].n }]);
            if(i === 100){
                break;
            }
        }
    })
    .finally(() => setLoading(false));
  },[chosenDate]);

  return (
    <Container>
        <InputController>
            <TickerList tickerRef={tickerRef} stockList={stocks} />
            <TickerButton onClick={generateChart}>generate chart</TickerButton>
            <button onClick={() => setCalendar(!calendar)}><BsCalendar3 /></button>
            <CalendarComponent onChange={(value) => {setChosenDate(value); setCalendar(!calendar)}} hidden={calendar} />
        </InputController>
        {loading ? <Loader /> : <StockList stockList={stocks} />}
        
    </Container>
  )
};
