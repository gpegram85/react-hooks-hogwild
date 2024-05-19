import React from "react";
import HogTile from "./HogTile"

function HogTileList({ hogs }) {

    return (

        <div className={"ui grid container"}>
            
            {hogs.map((hog) => 
                <HogTile hog={hog} key={hog.name}/> 
                )}
            
        </div>
    )
}

export default HogTileList