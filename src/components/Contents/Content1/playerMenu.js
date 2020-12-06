import React, {useRef} from 'react'
import player_card from "../../../data/player_data"; 
import { Scrollbars } from "react-custom-scrollbars";

export default function PlayerMenu() {
    const playermenuRef = useRef(null);

    const listItems = player_card.map((item) =>
        <PlayerMenuItems>
            <Scrollbars>
            <div className="player-container">
                <p>{item.player_name}</p>
                {console.log(item.status)}
                <span class="list-item"> <input className="list-check" checked={item.isChecked} type="checkbox"/> </span>    
            </div>
            </Scrollbars>
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
            {listItems}
            <hr className="solid"/>
                <button class="menu-button">Apply</button>
        </div>
    );
}