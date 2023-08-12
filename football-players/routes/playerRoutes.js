const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.post('/api/v1/player/add', playerController.addPlayer);
router.get('/api/v1/player/show', playerController.showPlayers);
router.get('/api/v1/player/calculateData/:playerId', playerController.calculateData);

module.exports = router;
