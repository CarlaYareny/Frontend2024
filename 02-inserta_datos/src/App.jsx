const persona={ 
nombre : 'Carla Yareny Gómez Bolaños',
edad : 21,
pasatiempos : [
  'jugar futbol',
  'Dormir'
],
cumpleaños : '02 de noviembre',
Signo : 'Escorpio',
}

function App() {

  return (

    <div>
      <h1>Imformacion personal</h1>
      <hr/>
      <ul>
        <li>Nombre completo: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Fecha de Nacimiento: {persona.cumpleaños}</li>
        <li>Signo zodiacal: {persona.dignozodiaco}</li>
        <li>Pasatiempos:
          <ul>
            {
              persona.pasatiempos.map((pasatiempo) =>{
                return <li key={pasatiempo}>{pasatiempo}</li>
              })
            }
          </ul>
        </li>
        </ul>
    </div>
  )
  
}

export default App


