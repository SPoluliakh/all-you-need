import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { AddContactForm } from 'components/AddContactButton/AddContactForm';
import { FaUserPlus } from 'react-icons/fa';
import * as SC from './AddContactButton.styled';

export const AddContactButton = () => {
  const [addContact, setAddContact] = useState(false);

  const toggleModal = () => {
    setAddContact(prevState => !prevState);
  };

  return (
    <>
      <SC.AddBtn type="button" onClick={toggleModal} variant="contained">
        <FaUserPlus size="22px" />
      </SC.AddBtn>
      {addContact && (
        <Modal toggleModal={toggleModal}>
          <AddContactForm toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
