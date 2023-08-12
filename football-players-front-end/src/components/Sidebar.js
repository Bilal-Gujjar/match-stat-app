import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/add-player">Add Player Info</Link>
            <Link to="/show-player">Show Player Info</Link>
        </div>
    );
}

export default Sidebar;
