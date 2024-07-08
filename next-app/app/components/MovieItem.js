
import styles from "./MovieItem.module.css";
import Link from "next/link";

export function MovieItem({ movie }) {

   return(
        <div className={styles.movie}>
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""/>
            )}
            <h3>{movie.title}</h3>
            <p>
                <Link className={styles.detailBtn} href={`/movies/${movie.id}`}>Detalhes</Link>

            </p>
        </div>
   ); 
}