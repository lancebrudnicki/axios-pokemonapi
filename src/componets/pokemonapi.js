import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Pokemon = (props) => {
    const [listofpokemon, setListofpokemon] =useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => {setListofpokemon(response.data.results)})
        }, [listofpokemon]);

    const clickHandler = (e) =>{
        setListofpokemon([]);
    }



    return (
        <div>
            <button onClick={clickHandler}>Fetch Pokemon</button>
            {
                listofpokemon.map((response) =>
                    <p>{response.name}</p>
                )}
        </div>
    )
}

export default Pokemon;