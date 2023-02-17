import React from 'react'
import HistoryRepos from '../HistoryRepos/HistoryRepos';
import HistorySearch from '../HistorySearch/HistorySearch';
import HistoryStatistic from '../HistoryStatistic/HistoryStatistic';
import styles from './HistoryModule.module.scss';


const HistoryModule = () => {
  return (
     <div className={styles.grid}>
        <HistoryStatistic/>
        <HistorySearch/>
        <HistoryRepos/>
      </div>
  )
}

export default HistoryModule