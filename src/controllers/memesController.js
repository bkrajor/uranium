const axios = require("axios")

let getMemes = async function (req, res) {
    try {
        let result = await axios.get(`https://api.imgflip.com/get_memes`)
        res.status(200).send(result.data)
    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

let createMemes = async function (req, res) {
    try {
        let memeId = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let result = await axios.post(`http://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}
        &text1=${text1}&username=${username}&password=${password}`)
        res.status(200).send(result.data)
    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

module.exports = {
    getMemes: getMemes,
    createMemes: createMemes
}

// username:- BharatKumar3
// password:- pM@XA3A2t@!R!sX
