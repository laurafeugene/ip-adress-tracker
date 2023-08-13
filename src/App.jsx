import './App.css'
import Map from './Components/Map/Map'
import SearchForm from './Components/SearchForm/SearchForm'
import ResultForm from './Components/ResultForm/ResultForm'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('');


  return (
    <>
     <SearchForm inputValue={inputValue} setInputValue={setInputValue} />
      <ResultForm inputValue={inputValue} />
    <Map />
    </>
  )
}

export default App
