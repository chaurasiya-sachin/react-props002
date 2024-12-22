import movieData from '../assets/movieData';
import MovieCard from '../Card/MovieCard';
import styles from './movieCardComponent.module.css'



const MovieCardComponent = () => {

  return (
    <div className={styles.movieContainer}>
    <h1 style={{color:"#ffffff" , padding:"2rem",textAlign:'center'}}>MovieBox<span style={{color:"#269fff"}}>.io</span>
    </h1>
        {movieData.map((movieInfo,idx) => {      
            return <MovieCard key={idx} {...movieInfo} />             
        })
        }
    </div>
  )
}

export default MovieCardComponent;
