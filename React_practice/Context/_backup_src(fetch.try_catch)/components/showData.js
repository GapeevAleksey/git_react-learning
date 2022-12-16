import { useState, useEffect } from 'react';
import useDataServices from '../services/getDataServices';

const ShowData = ({ getAllData }) => {
  const [data, setData] = useState({});
  const [getNames, getUserNames, getEmails] = useDataServices();
  const requestsForGet = [getNames, getUserNames, getEmails];
  const countResponces = Object.keys(data).length;

  const getCombinedData = (requests) => {
    requests.forEach((request) => {
      const name = request.name;
      request()
        .then((res) => {
          setData((prev) => ({ ...prev, [name.slice(3).toLowerCase()]: res }));
        })
        .catch((e) => {
          setData('ERROR');
        });
    });
  };

  useEffect(() => {
    console.log('useEffect_ShowData');
    getCombinedData(requestsForGet);
  }, []);

  useEffect(() => {
    if (countResponces === requestsForGet.length) {
      getAllData(data);
    }
  }, [data]);

  const showStatus = () => {
    if (data === 'ERROR') {
      return <h2 className={'data data__error'}>ERROR</h2>;
    } else if (countResponces !== requestsForGet.length) {
      return <h2 className={'data data__receiving'}>Loadind data...</h2>;
    } else if (countResponces === requestsForGet.length){
       return <h2 className={'data data__received'}>Data received</h2>
    }
  };

  return <div>{showStatus()}</div>;
};

export default ShowData;
