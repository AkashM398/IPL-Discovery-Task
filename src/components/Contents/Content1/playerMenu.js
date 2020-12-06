import React, {useRef} from 'react'
import player_card from "../../../data/player_data"; 

export default function PlayerMenu() {
    const playermenuRef = useRef(null);

    const listItems = player_card.map((item) =>
        <PlayerMenuItems>
            <div className="player-container">
                <p>{item.player_name}</p>
                {console.log(item.status)}
                <span class="list-item"> <input id="menu-check" className="list-check" checked={item.isChecked} type="checkbox"/> </span>    
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
            <input id="search" type="search" placeholder="Search here" className="menu-search"/>
            <hr className="solid"/>
            {listItems}
            <hr className="solid"/>
                <button class="menu-button">Apply</button>
        </div>
    );
}