import { useState, useEffect } from "react"
import { getCharacter } from "../../api/DisneyApi"
import CharacterCardContent from "./CharacterCardContent"
import CharacterCardPlaceholder from "./CharacterCardPlaceholder"

const CharacterCard = ({character}) => {

    const [anime, setAnime] = useState(null)

  useEffect(() => {
     const getCharacterAnime = async () => {
    setAnime(await getCharacter(character))
  }

 getCharacterAnime()

  }, [character])

    return(
      
        <div className="col-1 card m-2" style={{width: '18rem'}}>
          
           {
            anime ?
            <CharacterCardContent anime={anime}
            /> :

            <CharacterCardPlaceholder />
           } 
        </div>

    )
}
export default CharacterCard