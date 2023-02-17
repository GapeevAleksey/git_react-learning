import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import heart from '../../images/icons/heart.png';
import { addToHistory } from '../../store/github.slice';
import { IRepoItemProps } from '../../types/IRepoItemProps';
import { IReposItem } from '../../types/IRepos';
import { likesTransform } from '../../utils/likesTransform';
import styles from './ReposItem.module.scss';

const ReposItem: React.FC<IRepoItemProps<IReposItem>> = ({
  searchTitle,
  repoInfo,
  // language,
  // name,
  // likes,
  // avatar,
  // login,
  // htmlUrl,
  // description,
  // updated,
  // forks,
}) => {
  const [fullInfo, setFullInfo] = useState<boolean>(false);
  const showFullInfo = () => setFullInfo((fullInfo) => !fullInfo);
  const classes = `${fullInfo ? `${styles.itemBlock} ${styles.active}` : `${styles.itemBlock}`}`;
  const dispatch = useDispatch();
  const { history } = useSelector((state: any) => state.githubReducer);
  return (
    <>
      <li
        className={classes}
        onClick={() => {
          console.log(history);
          showFullInfo();
          if (history.searchTitle?.find((item: IReposItem) => item.id === repoInfo.id)) {
            return;
          } else {
            dispatch(addToHistory({ searchTitle, repoInfo }));
          }
        }}
      >
        <div className={styles.shortInfo}>
          <div className={styles.lang}>{repoInfo.language}</div>
          <div className={styles.title}>
            <p>{repoInfo.name}</p>
          </div>
          <div className={styles.likes}>
            <img src={heart} alt="like" />
            <span>{likesTransform(repoInfo.stargazers_count)}</span>
          </div>
          <div className={styles.owner}>
            <img src={repoInfo.owner.avatar_url} alt="avatar" />
            <div className={styles.owner__info}>
              <p className={styles.owner__login}>{repoInfo.owner.login}</p>
              <p className={styles.owner__url}>{repoInfo.owner.html_url}</p>
            </div>
          </div>
        </div>
        {fullInfo && (
          <div className={styles.fullInfo}>
            <p>{repoInfo.description}</p>
            <p>
              Forks: <span>{repoInfo.forks}</span>
            </p>
            <p>
              Updated: <span>{repoInfo.updated_at.toString()}</span>
            </p>
          </div>
        )}
      </li>
    </>
  );
};

export default ReposItem;
