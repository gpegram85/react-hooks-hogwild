import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTileList from "./HogTileList";
import HogFilter from "./HogFilter";
import HogSorter from "./HogSorter";

function App() {

	const [filteredHogs, setFilteredHogs] = useState(hogs)
	const [sortedHogs, setSortedHogs] = useState(hogs)

	const handleFilter = (isGreased) => {
		const updatedHogList = hogs.filter(hog => hog.greased === isGreased)
		setFilteredHogs(updatedHogList)
		setSortedHogs(updatedHogList)
	}

    const handleSort = (sortOption) => {
		let sortedList = [...filteredHogs]	
		if (sortOption === "weight") {
            sortedList.sort((a, b) => a.weight - b.weight)
        } else if (sortOption === "name") {
            sortedList.sort((a, b) => a.name.localeCompare(b.name))
        }
		setSortedHogs(sortedList)
    }

	return (
		<div className="App">
			<Nav />
			<HogFilter handleFilter={handleFilter} />
			<HogSorter handleSort={handleSort} />
			<HogTileList hogs={sortedHogs} />
		</div>
	);
}

export default App;
