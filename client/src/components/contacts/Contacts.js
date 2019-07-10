import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

import ContactContext from '../../context/contact/contactContext';

function Contacts(props) {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
}

Contacts.propTypes = {};

export default Contacts;
