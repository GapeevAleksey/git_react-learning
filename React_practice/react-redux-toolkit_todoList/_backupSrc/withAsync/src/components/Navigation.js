import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h2 className="font-bold text-xl">Person Search</h2>
      <span>
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </span>
    </div>
  );
}
