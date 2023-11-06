import React from 'react';
import { useSelector } from 'react-redux';

const PhoneBook = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filer.filer);
  const submit = ({ text }) => {
    dispatch(addContact(text));
  };
  const getFilteredData = () => {};
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <input type="text" name="name" />
          <input type="number" name="number" />
          <button type="submit">Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <ul>
            {getFilteredData()?.map(contact => (
              <li key={contact.id}>
                <button onClick={() => dispatch(deleteContact(contact.id))}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneBook;
