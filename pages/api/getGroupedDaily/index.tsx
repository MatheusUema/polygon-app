import axios  from 'axios'
import { convertDate } from '../../../utils/convert-date';

export const getGroupedDaily = async (date: Date) => {
    const today = new Date();
    let apiDate = new Date(today);
    if(date.toDateString === today.toDateString){
        apiDate.setDate(today.getDate() - 1);
    } else {
        apiDate = date;
    }
    const response = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${convertDate(apiDate)}?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`)
    return response;
  };