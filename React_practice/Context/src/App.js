import './App.css';
import TableColumn from './components/tableColumn';
function App() {
  
  return (
    <div className="App">
      <div className="table__body">
        <TableColumn value={'users'} />
        <TableColumn value={'posts'} />
        <TableColumn value={'todos'} />
      </div>
    </div>
  );
}

export default App;
