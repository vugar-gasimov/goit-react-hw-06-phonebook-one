import { addContact, deleteContact } from 'Redux/PhoneBook/phoneBookSlice';
import { selectContacts, selectFilter } from 'Redux/PhoneBook/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setFilter } from 'Redux/filterSlice';
import { useForm } from 'react-hook-form';

export const PhoneBook = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.info('You have deleted a contact from Favourites');
  };

  const getFilteredData = () => {
    return contacts.filter(
      item =>
        item.name &&
        filter &&
        item.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const { handleSubmit: onSubmit } = useForm();
  const SubmitContact = ({ name, number }) => {
    dispatch(addContact({ name, phoneNumber: number }));
    toast.success('You have added new contacts');
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit(SubmitContact)}>
          <input type="text" name="name" placeholder="Write your name here" />
          <input
            type="tel"
            name="number"
            placeholder="Write your number here"
          />
          <button type="submit">Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={e => {
              dispatch(setFilter(e.target.value));
            }}
            placeholder="Feel free to search by name"
          />
          <ul>
            {getFilteredData()?.map(contact => (
              <li key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button onClick={() => handleDeleteContact(contact.id)}>
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
