import MyContext from "../services/myContext";
import {useContext} from 'react'
const TableTitle = () => {
  const value = useContext(MyContext)
  return (
    <div className="column__title">
      <h3>{value}</h3>
    </div>
  );
};
export default TableTitle;
