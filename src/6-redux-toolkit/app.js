import React from "react"
import { useGetAllUsersQuery } from "./slice"

const ReactApp = () => {
	const { data, error, isLoading } = useGetAllUsersQuery("users")
	console.log(data)
	return (
		<div>
			ReactApp
			{data?.map((datas, index) => (
				<li key={index}>
					{datas.id} - {datas.name}
				</li>
			))}
		</div>
	)
}

export default ReactApp
