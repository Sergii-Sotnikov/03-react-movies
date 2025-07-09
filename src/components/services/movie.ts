import axios from "axios";
export type {Movie} from "../../types/movie"

interface MoviesHttpResponse {
    movies: Movie[]
}


export const getMovie = async (query: string):Promise<Movie[]> => {
    const response = await axios.get<MoviesHttpResponse>()
}
