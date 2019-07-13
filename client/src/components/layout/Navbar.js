import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

function Havbar({ title, icon }) {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const handleLogout = () => {
    logout();
  };

  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={handleLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </>
  );
  const guestLinks = (
    <>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  );

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        {/* <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li> */}
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  );
}

Havbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
};

Havbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
};

export default Havbar;
