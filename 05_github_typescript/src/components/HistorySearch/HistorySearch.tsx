import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistoryActivePoint } from '../../store/github.slice';
import styles from './HistorySearch.module.scss';

const HistorySearch: React.FC = () => {
  const { history } = useSelector((state: any) => state.githubReducer);
  const dispatch = useDispatch();
  return (
    <div className={styles.historySearch}>
      <p>Search history</p>
      <ul>
        {Object.keys(history).map((searchItem) => (
          <li key={searchItem} onClick={() => dispatch(setHistoryActivePoint(searchItem))}>
            {searchItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorySearch;
