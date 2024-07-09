import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => {
        console.log(category);
        const params = new URLSearchParams();
        if (category) {
          params.append("category", category);
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
