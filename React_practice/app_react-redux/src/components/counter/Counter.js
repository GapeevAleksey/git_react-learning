import { connect, useDispatch, useSelector } from 'react-redux';
import { inc, dec, rnd } from './actions';
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-danger">
        DEC
      </button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        INC
      </button>
      <button onClick={() => dispatch(rnd())} className="btn btn-warning">
        RND
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => ({ counter: state.value });

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;
