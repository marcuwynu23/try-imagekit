require("dotenv").config()
const Imagekit = require('imagekit');



const imagekit = new Imagekit({
	publicKey: process.env.PUBLIC_KEY,
	urlEndpoint: process.env.END_POINT,
	privateKey: process.env.PRIVATE_KEY,
})

module.exports = imagekit;