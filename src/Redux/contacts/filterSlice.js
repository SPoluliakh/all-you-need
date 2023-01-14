import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (_, action) => {
      const filtredContacts = action.payload.toLowerCase();
      return filtredContacts;
    },
  },
});

export const { filterContact } = filterSlice.actions;

// Selectors
export const getFilter = state => state.filter;
