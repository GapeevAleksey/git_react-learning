import styles from './PostItem.module.css';

const PostItem = ({ title, body }) => {
  return (
    <li className={styles.post}>
      <span className={styles.title}>{title}</span>
      <span className={styles.body}>{body}</span>
    </li>
  );
};

export default PostItem;
