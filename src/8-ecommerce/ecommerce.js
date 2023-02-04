import styled from "styled-components"

import React, { useState } from "react"
import Products from "./products"
import Sidebar from "./sidebar"

const Stack = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
`

const Ecommerce = () => {
	const [products, setProducts] = useState("")

	const handleClick = (value) => {
		setProducts(value)
	}
	return (
		<Stack>
			<Sidebar onClick={handleClick} />
			<Products products={products} />
		</Stack>
	)
}

export default Ecommerce
