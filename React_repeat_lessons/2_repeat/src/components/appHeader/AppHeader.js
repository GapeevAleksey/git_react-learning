import './appHeader.scss';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <NavLink to="/">
          <span>Cocktail</span> information portal
        </NavLink>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? '#e5989b' : 'black',
              })}
              to="/"
            >
              Main
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              // end
              style={({ isActive }) => ({
                color: isActive ? '#e5989b' : 'black',
              })}
              to="/comics"
            >
              Cocktail
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
