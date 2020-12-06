import React, {useRef} from 'react'
import player_card from "../../../data/player_data"; 

export default function TeamMenu() {
    const playermenuRef = useRef(null);

    const listItems = player_card.map((item) =>
        <PlayerMenuItems>
            <div className="player-container">
                <p>{item.team_name}</p>
                <span class="list-item"> <input className="list-check" type="checkbox" checked={item.isChecked}/> </span>    
            </div>
        </PlayerMenuItems>
    );

    function PlayerMenuItems(props) {
        return (
        <span className="menu-item">{props.children}</span>
        );
    }

    return (
        <div className="playermenu" ref={playermenuRef}>
            <input type="search" placeholder="Search here" className="menu-search"/>
            <hr className="solid"/>
            <div className="list-content">
                {listItems}
            </div>
            <hr className="solid"/>
                <button class="menu-button">Apply</button>
        </div>
    );
}