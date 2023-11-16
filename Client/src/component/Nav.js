import React from 'react';
import { Link } from 'react-router-dom';
const Nav=()=>{
    return(
        <div>
            <ul className="Nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Score cards">Scorecards</Link></li>
                <li><Link to="/Rankings">Rankings</Link></li>
                <li><Link to="/Stories">Top Stories</Link></li>
                <li><Link to="/Fixtures">Fixtures</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </div>
    )
}

export default Nav;
