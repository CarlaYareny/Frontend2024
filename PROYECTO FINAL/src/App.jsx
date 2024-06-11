import CharacterCard from './components/CharacterCard/index'
import './assets/css/index.css'
import SearchCharacter from './components/SearchCharacter'
import { useState } from 'react'


const App = () => {
  const [characters, setCharacters] = useState([])
 
  return (
    <div className='container'>
      
      <h1 style={{color: "#FFFFFF"}}>Naruto Api</h1>
      <hr />
      <SearchCharacter characters={characters} setCharacters={setCharacters} />
      <hr />

      <div className='row'>
      {
        characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))
      }
      </div>
      
      </div>
  )
}

export default App