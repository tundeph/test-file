require("dotenv").config()

const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")

app.use(express.json())

let refreshTokens = []

app.post("/token", (req, res) => {
	const refreshToken = req.body.token

	if (refreshToken === null) return res.sendStatus(401)
	if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
	jwt.verify(refreshToken, process.env.REFRESH_WEB_TOKEN, (err, user) => {
		if (err) return res.sendStatus(403)
		console.log("user", user)
		const accessToken = generateAccessToken({ user: user.user })
		res.json(accessToken)
	})
})

app.delete("/logout", (req, res) => {
	refreshTokens = refreshTokens.filter((token) => token != req.body.token)
	res.sendStatus(204)
})

app.post("/login", (req, res) => {
	const user = { user: req.body.username }
	const accessToken = generateAccessToken(user)
	const refreshToken = jwt.sign(user, process.env.REFRESH_WEB_TOKEN)
	refreshTokens.push(refreshToken)
	res.json({ accessToken, refreshToken })
})

function generateAccessToken(user) {
	return jwt.sign(user, process.env.ACCESS_WEB_TOKEN, { expiresIn: "20s" })
}

app.listen(4000)
