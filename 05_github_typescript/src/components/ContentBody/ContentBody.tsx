import React, { ReactElement } from 'react';
import styles from './ContentBody.module.scss';

const ContentBody: React.FC<any> = ({ children }) => {
  return <div className={styles.contentBody}>{children}</div>;
};

export default ContentBody;
