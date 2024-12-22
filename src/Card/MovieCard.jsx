import styles from './movieCard.module.css'

const MovieCard = (props) => {
    console.log(`url(${props.background_url})`);
    
  return (
    <div className={styles.movieCard} style={{backgroundImage:`linear-gradient(90deg, rgba(20, 19, 20),rgba(20, 19, 20,0.9), rgba(16, 14, 15, 0.04)),url(${props.background_url})`}}>
    <div className={styles.content}>
      <div className={styles.contentContainerTop} >
        <div className={styles.poster} >
        <img src={props.poster_url}/></div>
        <div>
          <div style={{fontSize:"3rem"}}>{props.title}</div>
          <div style={{color:'#269fff',marginTop:"0.5rem",fontSize:'1.5rem'}}>
            {props.year} , {props.director}
          </div>
          <div className={styles.duration_genre}>
            <div>{props.duration}</div>
            <div>
              {(props.genres).join(', ')}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.icon}>
      <i class="ri-share-fill"></i>
      <i class="ri-heart-add-2-fill"></i>
      <i class="ri-chat-4-fill"></i>
      </div>
      </div>
    </div>
  );
};

export default MovieCard;
