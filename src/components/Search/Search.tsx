import React from 'react'

const Search: React.FC = () => {
    return (
        <div className="search"> 
            <div className="search__wrapper">
                <label htmlFor="search-input">Seach:</label>
                <input type="text" name="" id="search-input" className="search__input" />                
            </div>
        </div>
    )
}

export default Search;