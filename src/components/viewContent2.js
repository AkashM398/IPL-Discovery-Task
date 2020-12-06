import React, { useState } from 'react';
import player_card from "../data/player_data2";
import PlayerMenu from "./Contents/Content2/playerMenu";
import OwnerMenu from "./Contents/Content2/ownerMenu";
import TeamMenu from "./Contents/Content2/teamMenu";
import CityMenu from "./Contents/Content2/cityMenu";

const ViewContent2 = () => {
    console.log(player_card);
    const listItems = player_card.map((item) =>
        <div className="card-container">
            <div className="card" key={item.id} style={{display: item.display}}>
            <div className="card_header">
                <h1>{item.player_name}</h1>
                <p>{item.team_name}</p>
                <p className="owner">{item.owner}</p>
                <div className="city">{item.city}</div>
            </div>
        </div>
        </div>
    );

    function FacetFilter(props) {
        return(
            <div className="filter-container">
                {props.children}
                <div className="search-bar">
                    <input type="search" id="filter" placeholder="Search here" className="search-filter"/>
                </div>           
            </div>
        );
    }

    function FilterItem(props) {
        const [open, setOpen] = useState(false);

        return (
            <div className="filter-button-group">
            <button className="filter-button" id={props.id} onClick={() => 
            setOpen(!open)
            }>{props.name}</button>
            {open && props.children}  
            </div>
        );
    }

    return (
        <div className="main_content">
            <FacetFilter>
                <FilterItem id="1" name="Players">
                    <PlayerMenu/>
                </FilterItem>
                <FilterItem id="2" name="Teams">
                    <TeamMenu/>
                </FilterItem>
                <FilterItem id="3" name="Owners">
                    <OwnerMenu/>
                </FilterItem>
                <FilterItem id="4" name="Cities">
                    <CityMenu/>
                </FilterItem>
            </FacetFilter>
            {listItems}
        </div>
    )
}
export default ViewContent2;
