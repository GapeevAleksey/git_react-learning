import styles from '../../CocktailInfo/CocktailInfo.module.scss';
import stylesSkeleton from './ModalSkeleton.module.scss';
import loader from '../../../images/loader.gif';

const ModalSkeleton = () => {
  return (
    <div className={styles.body}>
      <div className={styles.image}>
        <img src={loader} alt="loader" />
        <button className={stylesSkeleton.favorite}>xxxxxxxx</button>
      </div>

      <div className={styles.textBlock}>
        <div className={styles.description}>
          <h2>Xxxxxxxxx</h2>
          <p>
            {' '}
            xxxxxx x xxxx xxxxx xxx
            <br /> xxxx xxxxxx xxxx
            <br /> xxxxxxxxxx xxxxxx
            <br /> xxxx xx xxxx xxxxxxxxx
          </p>
        </div>
        <div className={styles.ingredients}>
          <h3 className={styles.title}>Xxxxxxxxx</h3>
          <ul className={stylesSkeleton.list}>
            <li>x. xxxxxxxxxxxxxx</li>
            <li>x. xxxxxxxxxxxxxxxxxx</li>
            <li>x. xxxxxxxxxx</li>
            <li>x. xxxxxxxxxxxxxxx</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalSkeleton;
