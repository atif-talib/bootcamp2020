/*
	Array of genres. Iterate over this array and display buttons
	on Web page by using each element of the array.
*/

import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
const genres = ["Action", "Horror", "Sci-fi", "Drama", "Adventure"];

/*
	Array of Movies. Iterate over this array and display movie cards 
	on web page by using each element of the array.
*/
const moviesList = [
  {
    title: "Avengers Endgame",
    year: 2019,
    genre: "Action",
    cast: [
      { name: "Robert Downey Jr", role: "Iron Man" },
      { name: "Chris Hemsworth", role: "Thor" },
      { name: "Mark Ruffalo", role: "Hulk" },
    ],
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-fi",
  },
  {
    title: "The Imitation Game",
    year: 2014,
    genre: "Drama",
  },
  {
    title: "The Conjuring",
    year: 2013,
    genre: "Horror",
  },
  {
    title: "John Wick",
    year: 2014,
    genre: "Action",
  },
  {
    title: "Spider Man Homecoming",
    year: 2017,
    genre: "Action",
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-fi",
  },
  {
    title: "The Matrix",
    genre: "Sci-fi",
    year: 1999,
  },
];
const Movies = () => {
    let [cards,setCards]=useState([]);
    let all = [];
    all.push(<button class="btn btn-primary" style={{margin:'.2em'}} onClick = {() => filter("All") } id={"All"}>All</button>);

  function createCard(movie) {
      let card = (<div className="col-4 card" style={{width: '18rem'}}>
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{movie.year}</h6>
        <p class="card-text">{movie.genre}</p>
      </div>
    </div>)
    return card;
  }
  function filter(id){
    let newCards = [];
    for(let i in moviesList){
        if(id==="All" || id=== moviesList[i].genre)
        { 
          newCards.push(createCard(moviesList[i]))
        }
    }
    setCards(newCards);

}
    return (
      <React.Fragment>
        <div id="movies">
          <div id="buttons">
          {all.concat(genres.map((obj,i)=>{return <button class="btn btn-primary" style={{margin:'.2em'}} onClick = {() => filter(genres[i]) } id={genres[i]}>{genres[i]}</button>
          }))
          }
          </div>
          <div id="cards" className="row">{cards}</div>
        </div>
      </React.Fragment>
    );
};

export default Movies;
