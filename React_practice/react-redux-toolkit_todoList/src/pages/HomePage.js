import { addPerson, fetchPersons, removePerson } from '../reducers/persons';
import { fetchTodos } from '../reducers/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
export const HomePage = () => {
  const [newPersonName, setNewPersonName] = useState();
  const dispatch = useDispatch();
  const { todos, loadingStatusTodos, errorStatusTodos } = useSelector(
    (state) => state.todosSlice
  );
  const { persons, loadingStatus, errorStatus } = useSelector(
    (state) => state.personsDB
  );

  useEffect(() => {
    console.log('first');
    dispatch(fetchPersons());
  }, []);

  useEffect(() => {
    console.log('second');
    dispatch(fetchTodos());
  }, []);
  
  return (
    <>
      {console.log('render_HOME_PAGE')}
      <div className="flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addPerson({ newPerson: { id: 100, name: newPersonName } })
            );
          }}
        >
          <input
            onChange={(e) => {
              setNewPersonName(e.target.value);
            }}
            value={newPersonName}
            type="text"
            className="form-control
        block
        px-3
        py-1.5
        my-5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </form>
      </div>
      <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
          {loadingStatusTodos === 'loading' && <h2>Loading...</h2>}
          {errorStatusTodos && <h3>{errorStatusTodos}</h3>}
          <ul>
            {todos?.map((todo) => (
              <li key={todo.id}>
                {todo.title}
                <span
                  onClick={() => {}}
                  style={{ color: 'red', fontSize: 25, cursor: 'pointer' }}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
          {loadingStatus === 'loading' && <h2>Loading....</h2>}
          {errorStatus && <h2 className="font-bold text-3xl">{errorStatus}</h2>}
          <ul>
            {persons?.map((person) => (
              <li key={person.id}>
                {person.name}
                <span
                  onClick={() => {
                    dispatch(removePerson({ id: person.id }));
                  }}
                  style={{ color: 'red', fontSize: 27, cursor: 'pointer' }}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
