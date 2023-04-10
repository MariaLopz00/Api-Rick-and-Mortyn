
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { CardPersonaje } from './components/CardPersonaje';
import { StatusContext } from './context/StatusContext';


export const App = () => {

  const [lista, setLista] = useState([]);

  const mostrar = async () => {
    try {

        await fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())
        .then((respuesta) => setLista(respuesta.results))

    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  console.log(lista)


  return (
    <div>

      <div style={{textAlign:"center", margin:'10px'}} >
       <Button variant="danger" onClick={mostrar} >Obtener Personajes</Button>
      </div>

      <StatusContext.Provider value={{lista,setLista}}>

        <CardPersonaje />

      </StatusContext.Provider>


    </div>
  )
}

