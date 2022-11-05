import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: (name) => name,
			transformResponse: (returnValue, meta) => {
				return returnValue.filter((data) => data.id > 5)
			},
		}),
	}),
})

export const { useGetAllUsersQuery } = usersApi
