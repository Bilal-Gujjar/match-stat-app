import React, { useState } from 'react';

const AddPlayerInfo = () => {
    const [playerData, setPlayerData] = useState({
        name: '',
        playedMatches: '',
        won: '',
        drawn: '',
        lost: '',
        noShows: '',
        averageVote: ''
    });

    const handleChange = (e) => {
        setPlayerData({
            ...playerData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make POST request to backend
            const response = await fetch('http://localhost:3000/api/v1/player/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(playerData)
            });
            await response.json();
            // Handle response accordingly
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="add-player">
            <form onSubmit={handleSubmit}>
                <label>
                    Player Name:
                    <input type="text" name="name" value={playerData.name} onChange={handleChange} />
                </label>
                <label>
                    Played Matches:
                    <input type="number" name="playedMatches" value={playerData.playedMatches} onChange={handleChange} />
                </label>
                <label>
                    Won:
                    <input type="number" name="won" value={playerData.won} onChange={handleChange} />
                </label>
                <label>
                    Drawn:
                    <input type="number" name="drawn" value={playerData.drawn} onChange={handleChange} />
                </label>
                <label>
                    Lost:
                    <input type="number" name="lost" value={playerData.lost} onChange={handleChange} />
                </label>
                <label>
                    No Shows:
                    <input type="number" name="noShows" value={playerData.noShows} onChange={handleChange} />
                </label>
                <label>
                    Average Vote:
                    <input type="number" name="averageVote" value={playerData.averageVote} onChange={handleChange} />
                </label>
                <button type="submit">Add Player</button>
            </form>
        </div>
    );
}

export default AddPlayerInfo;
