import { moviesApiis } from "../config/https";

export function getPopularMovies() {
    return moviesApiis.get("movie/popular");
}

export function getMovie(movieId) {
    return moviesApiis.get(`movie/${movieId}`);
}