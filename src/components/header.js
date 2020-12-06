import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <div className="logo">Atlan.</div>
            <ul>
                <li><NavLink to="/view1" className="nav-link">View1</NavLink></li>
                <li><NavLink to="/view2" className="nav-link">View2</NavLink></li>
            </ul>
        </nav>
    )
}
