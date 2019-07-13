import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Havbar({ title, icon }) {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
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
