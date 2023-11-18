import {Link} from "react-router-dom";
import pikachu from "../assets/pikachu.main.jpeg"

export const Home = () => {
  return (
    <div className="mt-5">
      <main className="text-center">
        <h1>¡Bienvenidos Maestro Pokemon!</h1>
        <img src={pikachu} alt="Pokeball" style={{width: "200px"}}/>
        <Link className="btn btn-success" to="/pokemons">
          <div className="d-flex gap-2 ">
            <i className="bi bi-briefcase"></i> Selecciona Pokemons!
          </div>
        </Link>
      </main>
    </div>
);
};