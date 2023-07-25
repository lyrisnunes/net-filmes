import styles from '../Movie/Movie.module.css';
import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify';

import {api} from '../../Api/Api'

export function Movie(){
  const {id} = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading]= useState(true);

  useEffect(() => {
    async function loadMovie(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: '275493ccc041b8b0d8dc6f6dc07605f1',
          language: "pt-BR",
        }
      }).then((response)=>{
        setMovie(response.data); // recebe todos dados do filme
        setLoading(false); // é chamado para definir o estado de loading como false, indicando que o carregamento foi concluído.
      })
      .catch(()=>{
        console.log("filme não entrado");
        navigate("/", {replace:true}) // mudar a rota
        return;
      })
    }
    loadMovie();

    return()=> {
      console.log("componente desmontado")
    }
  }, [navigate,id])

  function saveMovie(){
    const myList = localStorage.getItem("@netfilme"); // armazena o dado

    let movieSave = JSON.parse(myList) || []; // confere se existe e se existir armazena no mylist

    const hasMovie = movieSave.some((movieSaves)=> movieSaves.id === movie.id); // busca id do filme SE TIVER ELE RETORNA MSG QUE JÁ ESTÁ SALVO

    if(hasMovie){
      toast.warn("Esse filme já está salvo!"); // SE ESTÁ SALVO ELE RETORNA
      return;
    }

    movieSave.push(movie);
    localStorage.setItem("@netfilme", JSON.stringify(movieSave));
    toast.success("Filme salvo com sucesso!")
  }


  if(loading){
    return(
      <div className={styles.movieinfo}>
        <h1>Carregando filme....</h1>
      </div>
    )
  }

   return(
       <div className={styles.movieinfo}>
       <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

        <h3>Sinopse</h3>
        <span>{movie.overview}</span>
        <strong>Avaliação: {movie.vote_average}/10</strong>

        <div className={styles.button}>
          <button onClick={saveMovie}>Salvar</button>
          <button>
            <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} trailer`}>Trailer</a>
          </button>
        </div>
       </div>
   )
 }
 