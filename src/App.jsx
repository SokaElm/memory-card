import { useState, useEffect } from 'react'
import './App.css'
import {Cards} from "./Cards.jsx"
import {getPokemonImages,shuffle} from "./getPokemonImages.js"

function App() {


  const [score,setScore] = useState(0);
  const [bestScore,setBestScore]= useState(0);
  const [pokemonCards,setPokemonCards] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const initialCards = await getPokemonImages();
      setPokemonCards(initialCards);
    }

    fetchData();
  }, []); 


  function handleClick(e) {

    const cartID=e.currentTarget.id;

    const selectedCard = pokemonCards.find((card) =>
      card.id === cartID
    );
  
    if (selectedCard.isClicked) {
      if (bestScore<score) setBestScore(score);
      setScore(0);
      setPokemonCards(prevPokemonCards => {
        return shuffle(
          prevPokemonCards.map(card => ({ ...card, isClicked: false })))
      })}

    
    else {
      setScore((prevScore) => prevScore + 1);
      setPokemonCards(prevPokemonCards => {
        const newCards = [...prevPokemonCards];
        const cardIndex = newCards.findIndex(card => 
          card.id === cartID)
          newCards[cardIndex] = { ...selectedCard, isClicked: true };
        return shuffle(newCards);})
      }

    }

  return (
    <>
  <h1>Play memory card!</h1>
  <p>There are 12 different cards on the board. Click on each card once until you click them all. </p>

  <h2>Score: {score} </h2>
  <h2>Best score: {bestScore}</h2>

  <Cards cards={pokemonCards} handleClick={handleClick} />

  </>
  )
}

export default App
