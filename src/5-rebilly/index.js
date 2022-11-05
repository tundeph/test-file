// To apply for this role:
// Send a POST request to https://applybyapi.com/gentoken/ with a valid JSON object in the POST body containing:
// a posting key
// the ID of this posting as the value
// If your POST request is correct, you will receive a token that is valid for 5 minutes.
// Send a POST request to https://applybyapi.com/apply/ with:
// a content-type of multipart/form-data
// required fields token, name, and email
// supply your resume as an attachment (must be PDF) with the resume field name
// optional fields phone, employer, source, or comments
// A successful application will return an application ID, and you will receive an email confirmation.

// import React, { useState } from "react"
// import axios from "axios"

// const Rebilly = () => {
// 	const [cv, setCV] = useState()

// 	const sendResume = async (e) => {
// 		e.preventDefault()

// 		try {
// 			const getToken = await axios.post(
// 				"https://applybyapi.com/gentoken/",
// 				{
// 					posting: 9,
// 				},
// 				{
// 					headers: {
// 						"Access-Control-Allow-Origin": "http://localhost:3000",
// 						"Access-Control-Allow-Methods": "POST",
// 						"Access-Control-Allow-Headers":
// 							"Origin, X-Requested-With, Content-Type, Accept",
// 					},
// 				}
// 			)
// 			console.log("token object", getToken)

// 			//upload CV
// 			// if (getToken) {
// 			let formData = new FormData()
// 			formData.append("token", getToken.token)
// 			formData.append("name", "Olatunde Owoeye-Phoster")
// 			formData.append("email", "olatundephoster@gmail.com")
// 			formData.append("resume", cv[0])

// 			const uploadResult = await axios.post(
// 				"https://applybyapi.com/apply/",
// 				// "https://v2.convertapi.com/upload",
// 				{
// 					formData,
// 				},
// 				{
// 					headers: {
// 						"Access-Control-Allow-Origin": "http://localhost:3000",
// 						"Access-Control-Allow-Methods": "POST",
// 						"Access-Control-Allow-Headers":
// 							"Origin, X-Requested-With, Content-Type, Accept",
// 					},
// 				}
// 			)
// 			console.log("result", uploadResult)
// 			// }
// 		} catch (err) {
// 			console.log(err)
// 		}
// 	}

// 	return (
// 		<div>
// 			<form onSubmit={sendResume}>
// 				Upload resume:
// 				<input type="file" onChange={(e) => setCV(e.target.files)} />
// 				<button type="submit">Upload CV</button>
// 			</form>
// 		</div>
// 	)
// }

// export default Rebilly

import React, { useState } from "react"
import axios from "axios"

const Rebilly = () => {
	const [cv, setCV] = useState()

	const sendResume = async (e) => {
		e.preventDefault()
		console.log(cv)
		try {
			// const getToken = await fetch("https://applybyapi.com/gentoken/", {
			// 	method: "POST",
			// 	mode: "no-cors",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: JSON.stringify({ posting: 9 }),
			// })
			// console.log("token object", getToken)
			//upload CV
			// if (getToken) {
			// let formData = new FormData()
			// formData.append("token", getToken.token)
			// formData.append("name", "Olatunde Owoeye-Phoster")
			// formData.append("email", "olatundephoster@gmail.com")
			// formData.append("resume", cv[0])
			// const uploadResult = await axios.post(
			// 	"https://applybyapi.com/apply/",
			// 	// "https://v2.convertapi.com/upload",
			// 	{
			// 		formData,
			// 	},
			// 	{
			// 		headers: {
			// 			"Access-Control-Allow-Origin": "http://localhost:3000",
			// 			"Access-Control-Allow-Methods": "POST",
			// 			"Access-Control-Allow-Headers":
			// 				"Origin, X-Requested-With, Content-Type, Accept",
			// 		},
			// 	}
			// )
			// console.log("result", uploadResult)
			// }
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<form onSubmit={sendResume}>
				Upload resume:
				<input type="file" onChange={(e) => setCV(e.target.files)} />
				<button type="submit">Upload CV</button>
			</form>
		</div>
	)
}

export default Rebilly
