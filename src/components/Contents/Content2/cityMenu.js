import React, {useRef} from 'react'
import player_card from "../../../data/player_data2"; 

export default function CityMenu() {
    const playermenuRef = useRef(null);

    const listItems = player_card.map((item) =>
        <PlayerMenuItems>
            <div className="player-container">
                <p>{item.city}</p>
                <span class="list-item"> <input className="list-check" id="menu-check" type="checkbox"/> </span>    
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
            <input type="search" id="search" placeholder="Search here" className="menu-search"/>
            <hr className="solid"/>
            {listItems}
            <hr className="solid"/>
                <button class="menu-button">Apply</button>
        </div>
    );
}