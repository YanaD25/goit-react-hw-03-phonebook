import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import Contacts from "./ContactList.component";

const ContactList = ({ contacts, onRemove }) => {
  return (
    <Contacts>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onRemove={() => onRemove(id)}
        />
      ))}
    </ul>
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
  onRemove: PropTypes.func.isRequired,
};
export default ContactList;
