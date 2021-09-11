import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className = "sidebar">
            <Link to="/" className="link">Home</Link>
            <Link to="/teams" className="link">My Teams</Link>
            <Link to ="/players" className="link">My Players</Link>
        </div>
    )
}

export default Sidebar
