import './app.scss';
import { Routes, Route } from 'react-router-dom';
import HeaderNav from '../header/HeaderNav';
import Posts from '../posts/Posts';
import Users from '../users/Users';

const App = () => {
  return (
    <main className="app">
      <HeaderNav />
      <div className="content">
        <Routes>
          <Route index element={<Posts />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
