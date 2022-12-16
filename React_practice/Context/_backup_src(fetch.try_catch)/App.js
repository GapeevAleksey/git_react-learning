import './app.scss';
import { useState, useEffect } from 'react';
import ShowData from './components/showData';

function App() {
  const [allData, setAllData] = useState(null);

  const getAllData = (data) => {
    setAllData(data);
  };

  useEffect(
    () => (allData ? console.log(JSON.stringify(allData, null, 2)) : null),
    [allData]
  );
  return (
    <>
      {/* <div className="app">{!err ? console.log(data) : console.log(err)}</div> */}
      {console.log('render_APP')}
      <ShowData getAllData={getAllData} />
    </>
  );
}

export default App;
