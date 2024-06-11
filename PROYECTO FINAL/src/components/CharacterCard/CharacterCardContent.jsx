import React from "react"
import CharacterModal from "../SearchCharacter/CharacterModal"
const CharacterCardContent = ({anime}) => { 
   console.log({anime})
    return(
        <>
         <img 
            src={`${anime.images[0]}`} 
            className="card-img-top mt-2" 
            alt="anime.images.condition.text"/>

            <div className="card-body">
                <h5 className="card-title">{anime.name}</h5>
                <p className="card-text"> <i className="bi bi-fire"></i>  Debut en Manga: {anime.debut.manga}</p>
                <p className="card-text"> <ion-icon name="shirt"></ion-icon>  Debut en Anime: {anime.debut.anime}</p>
                <p className="card-text"> <i className="bi bi-flag-fill"></i>  Tipo: {anime.natureType}</p>
            
                </div> 
                <CharacterModal anime={anime}/>

                <button
                style={{backgroundColor: "#5CBE57"}}
                type="button" 
                className="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#characterModal">Info</button>
               
                
        </>
    )
}

export default CharacterCardContent