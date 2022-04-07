const express = require('express');
const router = express.Router();

router.get('/movies', function (req, res) {
    const movies = ["IronMan", "SpiderMan", "BatMan", "AquaMan", "AntMan", "SuperMan", "X-Man"]
    res.send(movies)
})

router.get('/movies/:indexNumber', function (req, res) {
    const movies = ["IronMan", "SpiderMan", "BatMan", "AquaMan", "AntMan", "SuperMan", "X-Man"]
    let index = req.params.indexNumber
    if (index > movies.length - 1)
        res.send("No movie exists with this id")
    else
        res.send(movies[index])
})

router.get('/films', function (req, res) {
    const films = [
        { id: 1, name: 'IronMan' },
        { id: 2, name: 'SpiderMan' },
        { id: 3, name: 'BatMan' },
        { id: 4, name: 'AquaMan' },
        { id: 5, name: 'AntMan' },
        { id: 6, name: 'SuperMan' },
        { id: 7, name: 'X-Man' }
    ]

    res.send(films)

})
router.get('/films/:filmId', function (req, res) {
    const films = [
        { id: 1, name: 'IronMan' },
        { id: 2, name: 'SpiderMan' },
        { id: 3, name: 'BatMan' },
        { id: 4, name: 'AquaMan' },
        { id: 5, name: 'AntMan' },
        { id: 6, name: 'SuperMan' },
        { id: 7, name: 'X-Man' }
    ]
    let id = req.params.filmId
    if (id > films.length - 1)
        res.send("No movie exists with this id")
    else
        res.send(films[id])

})




module.exports = router;
// adding this comment for no reason