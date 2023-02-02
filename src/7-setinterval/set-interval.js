import React, { useState, useEffect } from "react"

const SetInterval = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [counter])

	return (
		<div>
			{counter < 10 ? (
				<div> You have spent {counter} seconds</div>
			) : (
				<div> End of assessment</div>
			)}
		</div>
	)
}

export default SetInterval
