import { useSelector } from "react-redux"
import { MovieItem } from "../components/MovieItem"
import styles from "./Favorito.module.css";

export function Favoritos() {
    const movies = useSelector(state =>state.favorito.movies);
    return(
        <>
        <h1>Tela para os filmes favoirtos</h1>

        <div className={styles.moviesList}>
          {movies.map((movie)=> <MovieItem key={movie.id} movie={movie} /> )}
        </div>
        </>
    )
}  