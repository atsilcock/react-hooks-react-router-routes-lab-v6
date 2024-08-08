import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Actors() {
  const [actor, setActor] = useState([])
  console.log(actor)

  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then((r) => r.json())
    .then(data => setActor(data))
  },[])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {
          actor.map((actor) => {
          return <article><h2>{actor.name}</h2>{actor.movies.map((movie) => <li>{movie}</li>)}</article>
          })
        }
      </main>
    </>
  );
};

export default Actors;
