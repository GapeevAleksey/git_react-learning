import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersons } from '../reducers/persons';

export const HomePage = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => {
    console.log(state);
    return state.personsDB.persons;
  });
  console.log(persons);
  useEffect(() => {
    dispatch(fetchPersons());

    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul>
        {persons?.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
