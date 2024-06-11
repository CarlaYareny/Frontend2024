import React from "react"
const CharacterModal =({anime}) => {

    return(
        <div>
            {anime && (
        <div className="modal" 
        id="characterModal"
        tabIndex="-1">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Información</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="card-text"><ion-icon name="person"></ion-icon> Edad: {anime.jutsu}</p>
           </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )}
</div>
    )
}

export default CharacterModal