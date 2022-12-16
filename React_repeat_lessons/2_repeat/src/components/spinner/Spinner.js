import spinner from '../../resources/gif/Iphone-spinner-2.gif';
import './spinner.scss';
const Spinner = () => {
  return (
    <div className="spinner">
      <img
        src={spinner}
        alt="wait until the page loads"
        className="spinner__img"
      />
    </div>
  );
};

export default Spinner;
