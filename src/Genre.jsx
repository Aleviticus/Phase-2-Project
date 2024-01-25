import React, {useState} from "react";

function Genre({searchString, setSearchString}){

    function handleSearch(e){
        const searchInput = e.target.value
        setSearchString(searchInput)
    }

    return(
        <div className="search">
            <input 
                type="text" 
                placeholder="Search Games"
                value={searchString} 
                onChange={handleSearch}>

            </input>
        </div>
    )
}

export default Genre;