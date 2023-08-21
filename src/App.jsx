import './App.css'
import Map from './Components/Map/Map'
import SearchForm from './Components/SearchForm/SearchForm'
import ResultForm from './Components/ResultForm/ResultForm'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState(''); // Initial value


  return (
    <>
     <SearchForm setInputValue={setInputValue} />
      <ResultForm inputValue={inputValue} /> {/*inputValue comme une prop */}
      <Map />
    </>
  )
}

export default App
