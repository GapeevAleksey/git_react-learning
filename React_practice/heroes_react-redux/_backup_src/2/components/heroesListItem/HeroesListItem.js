import { useDispatch } from 'react-redux';
import { useDeleteHeroMutation } from '../../redux/heroesApi';
import { heroesRemove } from '../heroesList/heroesSlice';
const HeroesListItem = ({ id, name, description, element }) => {
  const dispatch = useDispatch();
  const [deleteHero] = useDeleteHeroMutation();

  const deletePerson = async (id) => {
    await deleteHero(id).unwrap();
  };

  let elementClassName;

  switch (element) {
    case 'cat':
      elementClassName = 'bg-danger bg-gradient';
      break;
    case 'dog':
      elementClassName = 'bg-primary bg-gradient';
      break;
    case 'lion':
      elementClassName = 'bg-success bg-gradient';
      break;
    case 'fish':
      elementClassName = 'bg-warning bg-gradient';
      break;
    default:
      elementClassName = 'bg-secondary bg-gradient';
  }
  return (
    <li
      className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
    >
      <img
        src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg"
        className="img-fluid w-25 d-inline"
        alt="unknown hero"
        style={{ objectFit: 'cover' }}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
        <button
          onClick={() => {
            deletePerson(id);
          }}
          type="button"
          className="btn-close btn-close"
          aria-label="Close"
        ></button>
      </span>
    </li>
  );
};

export default HeroesListItem;
