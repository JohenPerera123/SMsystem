import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Stadium Management</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
        {user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
              </li>
              <div className="nav-item">
                <button className="btn btn-danger" onClick={logoutUser}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
