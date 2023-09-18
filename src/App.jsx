import './App.css'
import Map from './Components/Map/Map'
import SearchForm from './Components/SearchForm/SearchForm'
import ResultForm from './Components/ResultForm/ResultForm'
import { useState } from 'react'

function App() {
  const [resultData, setResultData] = useState(null);


  return (
    <>
     <SearchForm setResultData={setResultData} />
      <ResultForm data={resultData} />
      <Map />
    </>
  )
}

export default App
