import {API_URL,API_KEY} from "../config/index.json"
import {MovieArrayProps} from '../types'

const genres:Genre = {
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
    18: 'Drama',
    27: 'Horror',
    28: 'Action',
    35: 'Comedy',
    36: 'History',
    37: 'Western',
    53: 'Thriller',
    80: 'Crime',
    99: 'Documentary',
    878: 'Science Fiction',
    9648: 'Mystery',
    10402: 'Music',
    10749: 'Romance',
    10751: 'Family',
    10752: 'War',
    10770: 'TV Movie',
  };

  interface MovieProps {
    id:number
    original_title:string
    poster_path:string,
    backdrop_path:string
    vote_average:number
    overview:string
    release_date:string
    genre_ids:number[]
}

type Genre = {
    [key:number]:string
}

async function getMovies(): Promise<MovieArrayProps[]> {

    const response = await fetch(`${API_URL}?api_key=${API_KEY}`)
    const { results:movies } = await response.json()


    const moviesArray = movies.map((movie:MovieProps)=>{
        return {
            key:movie.id,
            title:movie.original_title,
            poster:getImagePath(movie.poster_path),
            backdrop:getBackdropPath(movie.backdrop_path),
            rating:movie.vote_average,
            description:movie.overview,
            releaseDate:movie.release_date,
            genres:movie.genre_ids.map<string>((genre_id)=>genres[genre_id])
        }
    })
    
    return moviesArray

 }


 function getImagePath(imagePath:string){
     return `https://image.tmdb.org/t/p/w440_and_h660_face${imagePath}`
 }

 function getBackdropPath(backdropPath:string){
    return `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${backdropPath}`
 }


export {
    getMovies
}