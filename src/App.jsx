import './App.css'
import SearchForm from './Components/SearchForm/SearchForm'
import ResultForm from './Components/ResultForm/ResultForm'
import { useState } from 'react'
import CustomMap from './Components/Map/Map'

function App() {
  const [resultData, setResultData] = useState(null);


  return (
    <>
     <SearchForm setResultData={setResultData} />
      <ResultForm data={resultData} />
      <CustomMap data={resultData} />
    </>
  )
}

export default App
