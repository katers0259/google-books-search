import React from 'react'

function Search(props) {
    return (
        <div className="searchbar">
            <form action="">
                <input onChange={props.handleSearch} type="text" />
                <button type="submit">Search</button>
            </form>
            
        </div>
    )
}

export default Search
