import MyContext from '../services/myContext';
import TableList from './tableList';
import TableTitle from './tableTitle';

const TableColumn = ({ value }) => {
  return (
    <div className="table__column column">
      <MyContext.Provider value={value}>
        <TableTitle />
        <TableList />
      </MyContext.Provider>
    </div>
  );
};
export default TableColumn;
