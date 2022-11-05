import React from "react"
import App from "./app"
import { Provider } from "react-redux"
import { store } from "./store"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { usersApi } from "./slice"

const ReduxToolkit = () => {
	return (
		<Provider store={store}>
			<ApiProvider api={usersApi}>
				<App />
			</ApiProvider>
		</Provider>
	)
}

export default ReduxToolkit
