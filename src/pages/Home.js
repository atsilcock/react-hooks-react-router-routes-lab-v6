import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"

function Home() {
const [movies, setMovies] = useState([])
console.log(movies)

useEffect(()=>{
  fetch("http://localhost:4000/movies")
  .then((r) => r.json())
  .then(data => setMovies(data))
},[])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>
          Home Page
        </h1>
       {
        movies.map((movie) => <MovieCard id = {movie.id} title  = {movie.title} key={movie.id}/>)
       }
      </main>
    </>
  );
};

export default Home;
