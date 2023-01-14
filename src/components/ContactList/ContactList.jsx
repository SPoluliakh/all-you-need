import * as SC from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilter } from '../../Redux/contacts/filterSlice';
import * as contactsOperations from '../../Redux/contacts/contactsOperations';

export const ContactList = () => {
  const { data } = contactsOperations.useFetchContactsQuery();

  const filterItem = useSelector(getFilter);

  //Responsible for rendering the requested/all contacts
  const findContactbyName = () => {
    return data?.filter(contact =>
      contact?.name.toLowerCase().includes(filterItem)
    );
  };

  return (
    <>
      <SC.TotalContacts>
        Contacts : {findContactbyName()?.length}
      </SC.TotalContacts>

      <SC.List>
        {findContactbyName()?.map(({ name, number, id }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))}
      </SC.List>
    </>
  );
};
