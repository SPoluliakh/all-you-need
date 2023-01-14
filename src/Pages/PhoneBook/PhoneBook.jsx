import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { MaineTitle } from './PhoneBook.styled';

export const PhoneBookPage = () => {
  return (
    <>
      <MaineTitle>Easy manage your contacts</MaineTitle>
      <Filter />
      <ContactList />
    </>
  );
};
