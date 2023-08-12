import React, { useState, useEffect } from 'react';

const ShowPlayerInfo = () => {
    const [players, setPlayers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [calculatedLevel, setCalculatedLevel] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/player/show')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(err => console.error(err));
    }, []);

    const handleCalculateLevel = async (playerId) => {
        try {
            // Make request to backend to calculate level
            const response = await fetch(`http://localhost:3000/api/v1/player/calculateData/${playerId}`);
            const data = await response.json();
            setCalculatedLevel(data.level); // Assuming the response contains a `level` key
            setModalOpen(true);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="show-player">
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Played Matches</th>
                        <th>Won</th>
                        <th>Drawn</th>
                        <th>Lost</th>
                        <th>No Shows</th>
                        <th>Average Vote</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.playedMatches}</td>
                            <td>{player.won}</td>
                            <td>{player.drawn}</td>
                            <td>{player.lost}</td>
                            <td>{player.noShows}</td>
                            <td>{player.averageVote}</td>
                            <td>
                                <button onClick={() => handleCalculateLevel(player._id)}>Calculate Level</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Calculated Level</h2>
                        <p>{calculatedLevel}</p>
                        <button onClick={() => setModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowPlayerInfo;
