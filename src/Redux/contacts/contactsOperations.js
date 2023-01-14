import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'get',
      }),

      providesTags: ['Contacts'],
    }),
    postContacts: builder.mutation({
      query: value => ({
        url: '/contacts',
        method: 'post',
        data: value,
      }),
      invalidatesTags: ['Contacts'],
    }),
    changeContacts: builder.mutation({
      query: value => ({
        url: `/contacts/${value.id}`,
        method: 'PATCH',
        data: {
          name: value.name,
          number: value.number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  usePostContactsMutation,
  useDeleteContactsMutation,
  useChangeContactsMutation,
} = contactsApi;
