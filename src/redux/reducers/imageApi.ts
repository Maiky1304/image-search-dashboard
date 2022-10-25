import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApiSlice = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-image-search1.p.rapidapi.com/images",
  }),
  endpoints: (builder) => ({
    searchImage: builder.query({
      query: (searchTerm: string) => ({
        url: `/search?q=${searchTerm}`,
        headers: {
          "X-RapidAPI-Key":
            "9f412dd59emshaa1db6c51c74e6fp180e84jsn0010d85281e3",
          "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
        },
      }),
      transformResponse(response: any) {
        return response.value[0].contentUrl;
      },
    }),
  }),
});

export const { useSearchImageQuery } = imageApiSlice;
