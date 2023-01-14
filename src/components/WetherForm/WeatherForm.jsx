import { FcSearch } from 'react-icons/fc';

export const WeatherForm = ({ name, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <input
            onChange={onChange}
            value={name}
            type="text"
            placeholder="Search city 🌤 "
          />
        </label>
        <button type="submit">
          <FcSearch size="24px" />
        </button>
      </form>
    </>
  );
};
