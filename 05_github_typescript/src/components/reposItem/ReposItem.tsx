import React, { useState } from 'react';
import styles from './ReposItem.module.scss';
import heart from '../../images/icons/heart.png';
import { IRepoItemProps } from '../../types/IRepoItemProps';
import { likesTransform } from '../../utils/likesTransform';

const ReposItem: React.FC<IRepoItemProps> = ({
  language,
  name,
  likes,
  avatar,
  login,
  htmlUrl,
  description,
  updated,
  forks,
}) => {
  const [fullInfo, setFullInfo] = useState<boolean>(false);
  const showFullInfo = () => setFullInfo((fullInfo) => !fullInfo);

  const classes = `${
    fullInfo ? `${styles.itemBlock} ${styles.active}` : `${styles.itemBlock}`
  }`;

  return (
    <>
      <li className={classes} onClick={showFullInfo}>
        <div className={styles.shortInfo}>
          <div className={styles.lang}>{language}</div>
          <div className={styles.title}>
            <p>{name}</p>
          </div>
          <div className={styles.likes}>
            <img src={heart} alt="like" />
            <span>{likesTransform(likes)}</span>
          </div>
          <div className={styles.owner}>
            <img src={avatar} alt="avatar" />
            <div className={styles.owner__info}>
              <p className={styles.owner__login}>{login}</p>
              <p className={styles.owner__url}>{htmlUrl}</p>
            </div>
          </div>
        </div>
        {fullInfo && (
          <div className={styles.fullInfo}>
            <p>{description}</p>
            <p>
              Forks: <span>{forks}</span>
            </p>
            <p>
              Updated: <span>{updated.toString()}</span>
            </p>
          </div>
        )}
      </li>
    </>
  );
};

export default ReposItem;
