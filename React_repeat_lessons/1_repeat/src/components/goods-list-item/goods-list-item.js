import './goods-list-item.css';

const GoodsListItem = ({
  id,
  name,
  price,
  status,
  isLike,
  isDisLike,
  onDelete,
 }) => {
  // const like = (id) => isLike(id);
  // const dislike = (id) => isDisLike(id);
  // const deleteGood = (id) => onDelete(id);
  return (
    <li
      className={
        'list-group-item d-flex justify-content-between list-group-item-light ' +
        status
      }
    >
      <div className="list-group-item-label">{name}</div>
      <input
        type="text"
        className="form-control list-group-item-input"
        defaultValue={price + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className={"btn btn-success"+ (status === 'like' ? ' active': '')}
          onClick={(e) => {
            e.preventDefault();
            isLike(id);
          }}
        >
          <i className={'bi bi-hand-thumbs-up'+ (status === 'like' ? '-fill': '')}></i>
        </button>
        <button
          type="button"
          className={"btn btn-danger"+ (status === 'dislike' ? ' active': '')}
          onClick={(e) => {
            e.preventDefault();
            isDisLike(id);
          }}
        >
          <i className={'bi bi-hand-thumbs-down'+ (status === 'dislike' ? '-fill': '')}></i>
        </button>

        <button
          type="button"
          className="btn btn-secondary "
          onClick={(e) => {
            e.preventDefault();
            onDelete(id);
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default GoodsListItem;
