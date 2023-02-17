import React from 'react';
import HistoryModule from '../components/HistoryModule/HistoryModule';
import styles from './HistoryPage.module.scss';

const HistoryPage: React.FC = () => {
  return (
    <div className="pageContainer">
      <HistoryModule />
    </div>
  );
};

export default HistoryPage;
