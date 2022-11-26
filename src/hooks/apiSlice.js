import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restful-booker.herokuapp.com",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        console.log(body);
        return {
          url: "/auth",
          method: "post",
          body,
        };
      },
    }),
    getAllProducts: builder.query({
      query: () => "1",
    }),
  }),
});

export const { useLoginUserMutation, useGetAllProductsQuery } = productsApi;
