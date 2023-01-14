import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ChangeContactForm } from './ChangeContactForm';
import { FaUserEdit } from 'react-icons/fa';
import * as SC from './ChangeContact.styled';

export const ChangeContact = ({ id }) => {
  const [addContact, setAddContact] = useState(false);

  const toggleModal = () => {
    setAddContact(prevState => !prevState);
  };

  return (
    <>
      <SC.ChangeBtn type="button" onClick={toggleModal} variant="contained">
        <FaUserEdit size="22px" />
      </SC.ChangeBtn>
      {addContact && (
        <Modal toggleModal={toggleModal}>
          <ChangeContactForm id={id} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

ChangeContact.propTypes = {
  id: PropTypes.string,
};
