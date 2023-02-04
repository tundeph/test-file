import React from "react"
import styled from "styled-components"

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	margin-right: 48px;
	padding-right: 16px;
	gap: 12px;
	border-right: 1px solid gray;
`

const Sidebar = ({ onClick }) => {
	return (
		<Stack>
			<div>sidebar</div>
			<button onClick={() => onClick("Body suits")}> Body suits </button>
			<button onClick={() => onClick("Men's shoes")}> Men's shoes </button>
		</Stack>
	)
}

export default Sidebar
