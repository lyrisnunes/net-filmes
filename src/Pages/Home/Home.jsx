import {useEffect, useState} from 'react';
import {api} from '../../Api/Api';
import {Link} from 'react-router-dom';

import styles from './Home.module.css'

// movie/now_playing?api_key=275493ccc041b8b0d8dc6f6dc07605f1&language=pt-BR

export function Home(){
  const [movie, setMovie]= useState([]);
  const [loading, setLoading] =useState(true);

  useEffect(() => {

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: '275493ccc041b8b0d8dc6f6dc07605f1',
          language: "pt-BR",
          page: 1,
        }
      })
      setMovie(response.data.results.slice(0,10))
      setLoading(false);
      
    }
    loadFilmes();
  
  }, [])

  if(loading){
    return(
      <div className={styles.loading}>
        <h2>Carregando filme...</h2>
      </div>
    )
  }
  

   return(
       <div className={styles.container}>
          <div className={styles.listmovie}>
            {movie.map((movies)=>{
              return(
                <article key={movie.id}>
                  <h1>{movies.title}</h1>
                  <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt={movies.title} />
                  <Link to={`/Movie/${movies.id}`}>ACESSAR</Link>
                </article>
              )
            })}
          </div>
       </div>
   )
 }
 