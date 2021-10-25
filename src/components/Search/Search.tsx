import { stringify } from 'querystring'
import React, {useState, useEffect} from 'react'
import api from '../../Service/api'
import './Search.css'

const Search: React.FC = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [selectedCity, setSelectedCity] = useState('')
    const [autoCompleteVisible, setAutoCompleteVisible] = useState(false)
    const [cityVisible, setCityVisible] = useState(false)
    
    function handleChange (e:any) {
        setSearch(e)
    }

    function handleSubmit (e:any) {
        // e.preventDefault()

        // console.log("e.", e.target[0].value)
        // setSearch(e.target[0].value)
        // setSelectedCity(e.target[0].value)
    }

    function handleClick(result:string) {
        setSelectedCity(result)
        setAutoCompleteVisible(false)
        setCityVisible(true)
    }
    
    useEffect(() => {
        const resultsArray:any = []
        api.filter(city => {
            city.name.indexOf(search) > -1 && resultsArray.push(city.name)
            return null
        })
        setResults(resultsArray)
        search === '' ? setAutoCompleteVisible(false) : setAutoCompleteVisible(true)
    }, [search] )
    
    return (
        <div className="search"> 
            <div className="search__wrapper">
                <form className="search__form" onSubmit={e => handleSubmit(e)}>
                    <label htmlFor="search-input">Seach: </label>
                    <input type="text" name="" id="search-input" className="search__input" onChange={(e) => handleChange(e.target.value)}/>
                    <button type="submit">Search for city</button>
                </form>
                {
                    autoCompleteVisible &&
                    <div className="search__results">
                        <ul>
                        {results.map((result, index) => {
                            return <li key={index} onClick={e => handleClick(result)}>{result}</li>
                        })}
                        </ul>
                    </div>
                }
                {
                    cityVisible && 
                    <div className="city">
                        <p><strong>Selected city: </strong>{selectedCity}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Search;