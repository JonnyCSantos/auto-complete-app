import React, {useState, useEffect} from 'react'
import api from '../../Service/api'
import './Search.css'

const Search: React.FC = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [visible, setVisible] = useState(false)

    
    function handleChange (e:any) {
        setSearch(e)
    }
    
    useEffect(() => {
        const resultsArray:any = []
        api.filter(city => {
            city.name.indexOf(search) > -1 && resultsArray.push(city.name)
            return null
        })
        setResults(resultsArray)
        search === '' ? setVisible(false) : setVisible(true)
    }, [search] )
    
    return (
        <div className="search"> 
            <div className="search__wrapper">
                <div className="search__form">
                    <label htmlFor="search-input">Seach: </label>
                    <input type="text" name="" id="search-input" className="search__input" onChange={(e) => handleChange(e.target.value)}/>
                </div>
                {
                    visible &&
                    <div className="search__results">
                        <ul>
                        {results.map((result, index) => {
                            return <li key={index}>{result}</li>
                        })}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Search;