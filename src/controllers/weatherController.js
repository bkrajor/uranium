let axios = require("axios")

let getWeather = async function (req, res) {
    try {
        let place = req.query.q
        let id = req.query.appid

        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`)
        // res.status(200).send({Data: result.data})
        res.status(200).send({ Temperature: result.data.main.temp })
    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

let getTemp = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Pune", "Delhi", "Hyderabad", "London", "Bareilly"];
        let tempCities = [];

        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }   //{city: Bengaluru}
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=ed48fe1ffb542551c1f562bed701876a`)
            obj.temperature = result.data.main.temp    //{city: Bengaluru, temperature: 302.22}
            tempCities.push(obj)
        }
        let sortByTemp = tempCities.sort(function (a, b) { return a.temperature - b.temperature })
        res.status(200).send({ data: sortByTemp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports = {
    getWeather: getWeather,
    getTemp: getTemp
}