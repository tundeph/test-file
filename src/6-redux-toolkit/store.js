import { configureStore } from "@reduxjs/toolkit"

import { usersApi } from "./slice"

export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware),
})
