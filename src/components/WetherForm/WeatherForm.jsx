import { FcSearch } from 'react-icons/fc';
import { BsXLg } from 'react-icons/bs';
import * as SC from './WeatherForm.styled';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

export const WeatherForm = ({ name, onChange, onSubmit }) => {
  const [, setSearchParams] = useSearchParams();
  const inputRef = useRef();

  const handleInputClean = () => {
    setSearchParams({});
    inputRef.current.focus();
  };

  return (
    <>
      <SC.Form onSubmit={onSubmit}>
        <label>
          <SC.FormInput
            ref={inputRef}
            onChange={onChange}
            value={name}
            type="text"
            placeholder="Search city 🌤 "
          />
        </label>
        <SC.FormButton type="submit">
          <FcSearch size="24px" />
        </SC.FormButton>
        <SC.FormButton type="button" onClick={handleInputClean}>
          <BsXLg size="24" />
        </SC.FormButton>
      </SC.Form>
    </>
  );
};
