const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    playedMatches: { type: Number, required: true },
    won: { type: Number, required: true },
    drawn: { type: Number, required: true },
    lost: { type: Number, required: true },
    sumCheck: String,
    points: Number,
    noShows: { type: Number, required: true },
    averageVote: { type: Number, required: true },
    pointsVsPlayedMatches: Number,
    level: String
});

module.exports = mongoose.model('Player', playerSchema);
