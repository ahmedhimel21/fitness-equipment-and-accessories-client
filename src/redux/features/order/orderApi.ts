import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => {
        return {
          url: "/orders",
          method: "POST",
          body: order,
        };
      },
    }),
  }),
});

export default orderApi;
