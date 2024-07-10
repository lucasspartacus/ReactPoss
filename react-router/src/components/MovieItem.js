import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, removeMovie } from "../store/redux/favorito";

export function MovieItem({ movie }) {
   const movies = useSelector(state =>state.favorito.movies);
   const dispatch = useDispatch();

   function renderButton() {
    if (movies.find(m=>m.id === movie.id)) {

        return <button onClick={()=>dispatch(removeMovie(movie))}>Remover aos favoritos</button>      
    }
    return <button onClick={()=>dispatch(addMovies(movie))}>Adicionar aos favoritos</button>
   }
   return(
        <div className={styles.movie}>
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""/>
            )}
            <h3>{movie.title}</h3>
            <p>
                <Link className={styles.detailBtn} to={`/movies/${movie.id}`}>Detalhes</Link>
                {renderButton()};
            </p>
        </div>
   ); 
}