import React from "react";
import PropTypes from "prop-types";
import Contacts from "./ContactList.component";


const ContactListItem = ({ name, number, onRemove }) => {
  return (
    <Contacts.Item>
      <p>
        {name} : {number}
      </p>

      <button type="button" onClick={onRemove}>
        Delete
      </button>
    </Contacts.Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default ContactListItem;
