import { Component, useState, useEffect, useCallback } from 'react';
import './CCC.css';
import AddTitle from './addTitle';

const CCC = ({ buttons }) => {
  const stylesTitle = {
    fontSize: '45px',
    // display: 'flex',
    // justifyContent: 'center',
    textAlign: 'center',
    margin: '0 auto 30px',
  };

  const [info, setInfo] = useState({
    data: [],
    loaded: 'users',
    filterType: 'name',
  });
  const [filter, setFilter] = useState('');

  // const getData = useCallback(
  //   (whatLoad) => {
  //     fetch(`https://jsonplaceholder.typicode.com/${whatLoad}`)
  //       .then((response) => response.json())
  //       .then((result) => setInfo({ data: [...result], loaded: whatLoad }));
  //     console.log(info);
  //   },
  //   [info.loaded]
  // );

  const getData = (whatLoad, whatFilter) => {
    fetch(`https://jsonplaceholder.typicode.com/${whatLoad}`)
      .then((response) => response.json())
      .then((result) =>
        setInfo({ data: [...result], loaded: whatLoad, filterType: whatFilter })
      );
    console.log(info.filterType);
  };

  const changeData = (whatShow, whatFilter) => {
    setInfo((prev) => {
      return { data: [...prev.data], loaded: whatShow, filterType: whatFilter };
    });
  };

  const deleteItem = (id) => {
    const newInfo = info.data.filter((item) => item.id !== id);

    setInfo((prev) => ({
      data: newInfo,
      loaded: prev.loaded,
      filterType: prev.filterType,
    }));
    console.log(id);
  };

  const onFilter = (e) => {
    setFilter(() => {
      return e.target.value;
    });
    console.log(filter);
  };

  useEffect(() => {
    console.log('render');
    return getData(info.loaded, info.filterType);
  }, [info.loaded]);

  return (
    <>
      <AddTitle title="Учет сотрудников" style={stylesTitle} />
      <div className="btn-group" role="group" aria-label="Basic example">
        {buttons.map((button) => {
          return (
            <button
              key={button.id}
              style={{ marginBottom: '10px' }}
              type="button"
              className={
                info.loaded === button.name
                  ? 'btn btn-warning'
                  : 'btn btn-primary'
              }
              onClick={(e) => {
                e.preventDefault();
                changeData(button.name, button.filterType);
              }}
            >
              {button.title}
            </button>
          );
        })}
      </div>
      <input
        className="form-control"
        type="text"
        placeholder="Filter..."
        style={{ marginBottom: '10px' }}
        onChange={onFilter}
      ></input>
      <ul className="list-group">
        {info.data.map((item) => {
          if (
            item[info.filterType] &&
            item[info.filterType].indexOf(filter) > -1
          ) {
            return (
              <li key={item.id} className="list-group-item">
                {item.id + '. '}
                {item[info.filterType]}
                {item.email ? ': ' + item.email : null}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteItem(item.id);
                  }}
                >
                  Удалить
                </button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default CCC;
