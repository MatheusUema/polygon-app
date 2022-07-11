import axios  from 'axios'
import { convertDate } from '../../../utils/convert-date';
import { IAggregate } from '../../../hooks/useAggregate';

export const getGroupedDaily = async (date: Date) => {
    const today = new Date();
    let apiDate = new Date(today);
    if(date.toDateString === today.toDateString){
        apiDate.setDate(today.getDate() - 2);
    } else {
        apiDate = date;
    }
    const response = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${convertDate(apiDate)}?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`)
    return response;
  };

export const getAggregates = async (ticker: string) => {
    const data :IAggregate = {
        name: '',
        dates: [],
        high: [],
        low: [],
        open: [],
        close: [],
    };
    await axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2020-08-01/2022-07-08?adjusted=true&sort=asc&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`).then(response => {
        const res = response.data.results;
        data.name = response.data.ticker;
        res.forEach((aggregate) => {
            data.close.push(aggregate.c);
            data.high.push(aggregate.h);
            data.low.push(aggregate.l);
            data.open.push(aggregate.o);
            const date = new Date(aggregate.t)
            data.dates.push(convertDate(date))
        })
        //converter dados e retorná-los no formato do IAggregate
    });
    return data;
}