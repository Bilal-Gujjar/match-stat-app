const Player = require('../models/player');

exports.addPlayer = async (req, res) => {
    try {
        const player = new Player(req.body);
        await player.save();
        res.status(201).json(player);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.showPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.calculateData = async (req, res) => {
    try {
        const playerId = req.params.playerId;
        const player = await Player.findById(playerId);

        if (!player) {
            return res.status(404).json({ message: "Player not found" });
        }

        const sumCheck = player.playedMatches === (player.won + player.drawn + player.lost);
        player.sumCheck = sumCheck;
        player.points = (player.won * 3) + player.drawn;
        player.pointsVsPlayedMatches = player.points / player.playedMatches;

        const logCalculation = Math.log(player.averageVote + (player.playedMatches / (player.averageVote * 20)), 1.3);
        const noShowsAdjustment = (player.noShows * 15 / player.playedMatches) > 1 ? 1 : (player.noShows * 15 / player.playedMatches);
        const averageVoteAdjustment = player.averageVote - 1.33;
        
        let level = Math.round(((logCalculation - noShowsAdjustment) + averageVoteAdjustment) * 10);
        
        player.level = level > 100 ? 100 : level;

        await player.save();

        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
