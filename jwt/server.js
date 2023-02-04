require("dotenv").config()

const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")

app.use(express.json())

const posts = [
	{ username: "Mo", title: "Post 1" },
	{ username: "Jay", title: "Post 2" },
]

app.get("/posts", authenticateToken, (req, res) => {
	console.log("req.user", req.user)
	res.json(posts.filter((post) => post.username === req.user.user))
})

app.post("/login", (req, res) => {
	const user = { user: req.body.username }
	const accessToken = jwt.sign(user, process.env.ACCESS_WEB_TOKEN)
	res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, next) {
	const authHeader = req.headers["authorization"]
	const token = authHeader && authHeader.split(" ")[1]
	console.log("token", token)
	if (token == null) return res.sendStatus(401)

	jwt.verify(token, process.env.ACCESS_WEB_TOKEN, (err, user) => {
		if (err) return res.sendStatus(403)
		req.user = user
		next()
	})
}

app.listen(3000)
