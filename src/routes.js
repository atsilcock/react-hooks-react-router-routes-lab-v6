import Actors from "./pages/Actors"
import Directors from "./pages/Directors"
import Movie from "./pages/Movie"
import Home from "./pages/Home"
import Error from "./pages/Error"


const routes = [
  {
    path:"/",
    element:<Home />,
    errorElement: <Error />
  },
  {
    path:"/actors",
    element:<Actors />, 
    errorElement: <Error />
  }, 
  {
    path:"/directors", 
    element:<Directors />,
    errorElement: <Error />
  }, 
  {
    path:"/movie/:id", 
    element:<Movie />,
    errorElement: <Error />
  }

];

export default routes;