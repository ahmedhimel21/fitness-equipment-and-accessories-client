import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category, searchTerm, sort, categories }) => {
        const params = new URLSearchParams();
        if (category) {
          params.append("category", category);
        }
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (sort) {
          params.append("sort", sort.sort);
        }
        if (categories && categories.length > 0) {
          params.append("category", categories);
        }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = baseApi;
