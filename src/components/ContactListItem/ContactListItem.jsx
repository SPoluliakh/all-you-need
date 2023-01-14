import PropTypes from 'prop-types';
import * as SC from './ContactListItem.styled';

import { useDeleteContactsMutation } from 'Redux/contacts/contactsOperations';
import { ChangeContact } from 'components/ChangeContact/ChangeContact';
import { FcCancel, FcPhoneAndroid } from 'react-icons/fc';

export const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();

  return (
    <>
      <SC.ListItem>
        <ChangeContact id={id} />
        <SC.ListItemText>
          {<FcPhoneAndroid size="17px" />} {name}: {number}
        </SC.ListItemText>
        <SC.ListItemBtn
          variant="contained"
          type="button"
          aria-label="delete contact"
          onClick={() => deleteContact(id)}
          disabled={isLoading}
        >
          {<FcCancel size="28px" />}
        </SC.ListItemBtn>
      </SC.ListItem>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
