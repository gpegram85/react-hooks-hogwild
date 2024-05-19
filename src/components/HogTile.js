import React, { useState } from "react";

function HogTile({ hog }) {
    
    const [isHidden, setIsHidden] = useState("true")

    const toggleHidden = () => {
        setIsHidden(!isHidden)
    }


    return(

        <div className={"ui eight wide column"} onClick={toggleHidden}>
            <div id={hog.name} className={"pigTile"} >
            <p className={"hoggyText"}>{hog.name}</p>
            <img src={hog.image} />
                <div className={isHidden ? "hidden" : ""}>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? "Yes" :"No"}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                </div>
            </div>
        </div>
    )
}

export default HogTile