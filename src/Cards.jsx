
 function Cards({cards,handleClick}) {

  const listItems = cards.map(card =>
    
    <li key={card.id} id = {card.id} onClick={handleClick}>
      <img
        src={card.image}
        alt={card.name}
        
      />
      <p>
        <b>{card.name}</b>
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}


export {Cards} 