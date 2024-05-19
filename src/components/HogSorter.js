import React, { useState } from "react";

function HogSorter({ handleSort }) {

    const [sortOption, setSortOption] = useState("")

    const handleSelectionChange = (e) => {
        const selection = e.target.value
        setSortOption(selection)
        handleSort(selection)
    }

    return(
        <div className="filterWrapper">
            <label>Sort By: </label>
            <select value={sortOption} onChange={handleSelectionChange}>
                <option value="">Select an option...</option>
                <option value="weight">Weight</option>
                <option value="name">Name</option>
            </select>
        </div>
    )
}

export default HogSorter