
const Imagekit = require('imagekit');


const WEBHOOK_SECRET = 'whsec_1h6Qus2opjCvC838IxxnF9l7oCfu+DdT'; // Copy from Imagekit dashboard
const WEBHOOK_EXPIRY_DURATION = 300 * 1000; // 300 seconds for example

const imagekit = new Imagekit({
	publicKey: 'public_YU14XW7TeRiSqRT6g4bvLCi5ItY=',
	urlEndpoint: 'https://ik.imagekit.io/kalapatid',
	privateKey: 'private_WMRcv/JAsTN1KvN/GVoXCeJGnv4=',
})





module.exports = imagekit;