// this is a file on how to open a html page and also upload files from node
//nodemon is also installed to auto-load changes just like live server

const fs = require("fs")
const axios = require("axios")
const http = require("http")
const express = require("express")
const multer = require("multer")
const uuid = require("uuid")
const FormData = require("form-data")
const fileupload = require("express-fileupload")

const form = new FormData()

// form.append("file", fs.createReadStream(file.path))

const upload = multer({
	dest: "https://1523c41a-4031-4034-8999-af389db9ea9f.mock.pstmn.io",
})
const app = express()
app.use(fileupload())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("uploads")) //tell node to use a folder called upload (for page display)

app.post("/upload-file", (req, res) => {
	// form.append("resume", req.files.avatar)
	// form.append("name", req.body.name)
	axios
		.post("https://1523c41a-4031-4034-8999-af389db9ea9f.mock.pstmn.io", {
			// resume: req.files.avatar,
			name: req.body.name,
		})
		.then((data) => console.log(data.data))

	return res.json({ status: "OK" })
})

app.listen(3005, () => console.log("App is listening..."))

axios
	.post("https://letsrevolutionizetesting.com/challenge", {})
	.then((data) => console.log(data.data))

// http
// 	.createServer((req, res) => {
// 		res.writeHead(200, { "Content-Type": "text/html" })
// 		res.write(
// 			'<form action="fileupload" method="post" enctype="multipart/form-data">'
// 		)
// 		res.write('<input type="file" name="filetoupload"><br>')
// 		res.write('<input type="submit">')
// 		res.write("</form>")
// 		return res.end()
// 	})
// 	.listen(8080)
