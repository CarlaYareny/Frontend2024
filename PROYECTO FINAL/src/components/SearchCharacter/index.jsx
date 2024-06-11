import {useForm} from "../../Hooks/UseForm"
import Swal from "sweetalert2"


const SearchCharacter = ({characters, setCharacters}) => {
    const [values, handleInputChange, reset] = useForm ({
        character: ''
    })

    const handleSearchCharacter = () => {

        if (!values.character) {
            Swal.fire({
              icon: "error",
              title: 'Oopps...',
              text: "Failed to retrieve character data...",
              position: 'center', // Posición de la alerta
        showClass: {
          popup: 'swal2-noanimation', // Desactivar animación de entrada
        },
              footer: 'POR FAVOR INGRESE EL NOMBRE DE UN PERSONAJE'
            });
            return;
          }
      
        const newCharacters = [...characters, values.character]
        setCharacters(newCharacters)
        console.log(values.character)
        reset()
    }
    return (
        <div className="input-group">
            <span className="input-group-text">Character</span>
            <input 
            type="text" 
            className="form-control" 
            id="character"
            name="character"
            onChange={handleInputChange}
            value={values.character}/>
    
            <button className="btn btn-primary"
            onClick={handleSearchCharacter}
             type="button">Search</button>
          
        </div>        
    )
}

export default SearchCharacter