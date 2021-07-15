import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FavouriteMovies from "./components/FavouriteMovies";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" exact component={MovieDetails} />
        <Route path="/favourites" exact component={FavouriteMovies} />
      </Switch>
    </Router>
  );
}

export default App;
