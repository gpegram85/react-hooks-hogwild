import React, { useState } from "react";

function HogFilter({ handleFilter }) {

    const [selectedOption, setSelectedOption] = useState("")
    
    const handleOptionSelect = (e) => {
        const selection = e.target.value
        setSelectedOption(selection)
        handleFilter(selection === "Yes")
    }

    return (
        <div className="filterWrapper">
            <label>See greased pigs? </label>
            <input 
                type="radio"
                name="greased"
                value={"Yes"}
                checked={selectedOption === "Yes"}
                onChange={handleOptionSelect}
            />
            <label> Yes </label>
            <input 
                type="radio"
                name="greased"
                value={"No"}
                checked={selectedOption === "No"}
                onChange={handleOptionSelect}
            />
            <label> No</label>
        </div>
    )
}

export default HogFilter