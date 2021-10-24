import './App.css';
import api from './Service/api'
import Search from './components/Search/Search'

function App() {
  api.map(city => {
    console.log("city", city.name)
    return null
  })
  
  return (
    <div className="App">
      <div className="App__wrapper">
        <h1>Search for cities from SP </h1>
        <Search/>
      </div>
    </div>
  );
}

export default App;