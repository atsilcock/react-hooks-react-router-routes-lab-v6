import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import {useParams} from "react-router-dom"

function Movie() {

  const [movie, setMovie] = useState(null)
  console.log(movie)

  const id = useParams().id

  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${id}`)
    .then((r) => r.json())
    .then(data => setMovie(data))
  },[])

 if ( movie === null ){
  return <h2>Loading...</h2>
 }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        {movie.genres.map((genre) => <span>Movie: {genre}</span>)}
        
      </main>
    </>
  );
};

export default Movie;
