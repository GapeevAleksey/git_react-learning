import useServices from '../services/useServices';
import MyContext from '../services/myContext';
import { useState, useEffect, useContext } from 'react';
const TableList = () => {
  const value = useContext(MyContext);
  const [dataBase, setDataBase] = useState(null);
  const { getData, error } = useServices();
  //   useEffect(() => {
  //     console.log(value);
  //     getData(value).then((res) => setDataBase(res));
  //   }, []);
  const showContent = () => {
    if (!dataBase && !error) {
      return (
        <LoadDiv getData={getData} setDataBase={setDataBase} value={value} />
      );
    } else if (dataBase && !error) {
      return <DataDiv dataBase={dataBase} />;
    } else if (error) {
      return <ErrorDiv error={error} />;
    }
  };

  return <div className="column__list">{showContent()}</div>;
};
export default TableList;

// --------------------------------------------------

const ErrorDiv = ({ error }) => {
  return <h3 style={{ color: '#bb5556' }}>{error}</h3>;
};

const LoadDiv = ({ getData, setDataBase, value }) => {
  return (
    <div
      style={{ listStyle: 'none', cursor: 'pointer' }}
      onClick={() => getData(value).then((res) => setDataBase(res))}
    >
      load data
    </div>
  );
};

const DataDiv = ({ dataBase }) => {
  return (
    <ul>
      {dataBase.map((item) =>
        item.name ? (
          <li key={item.id}>
            {item.name}
            <br />
            ---
          </li>
        ) : (
          <li key={item.id}>
            {item.title}
            <br />
            ---
          </li>
        )
      )}
    </ul>
  );
};
