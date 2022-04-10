const express = require('express');
const router = express.Router();

let players = [];

router.post('/players', function (req, res) {
    let player = req.body;
    let playerName = player.name;
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == playerName)
           return res.send('Player already exists');
    }
    players.push(player);
    res.send(players);
})


module.exports = router;
