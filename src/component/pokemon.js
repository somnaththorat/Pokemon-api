import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Pokemon = () =>{
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
       async function getData(){
           const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
           console.log(res.data.name);
           setName(res.data.name);
           setMoves(res.data.moves.length);
       } 
       getData();
    });

    return (
        <>
           <h1>Pokemon</h1> 
           <h1>you choose  <span style={{color: 'red'}}>{num} number</span></h1> 
           <h1>my name is <span style={{color: 'red'}}> {name} </span></h1> 
           <h1>I have  <span style={{color: 'red'}}> {moves} moves</span></h1> 
           <select value={num} onChange={(e)=>{
               setNum(e.target.value);
               
           }}>
               <option value="1">1</option>
               <option value="25">25</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
           </select>
        </>
    );
};

export default Pokemon;