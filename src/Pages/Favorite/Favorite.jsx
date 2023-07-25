import styles from './Favorite.module.css';

import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

export function Favorite(){
   const [movie, setMovie] = useState([]);

   useEffect(() => {
      const myList= localStorage.getItem("@netfilme");
      setMovie(JSON.parse(myList) || []); // confere se existe algo salvo no local, senão ele cri uma array

   }, [])

   function deleteMovie(id){ 
      let filterMovie = movie.filter((item) => {
         return( item.id !== id)
      })// retorna todos menos o clicado

      setMovie(filterMovie);
      localStorage.setItem("@netfilme", JSON.stringify(filterMovie))
      toast.success("Filme removido com sucesso")
   }

   return(
      <div className={styles.saveMovie}>
         <h1>Meus filmes</h1>

         {movie.length === 0 && <span>Você não possui nenhum filme salvo no momento</span>}

         <ul>
            {movie.map((item)=>{
               return(
                  <li key={item.id}>
                     <span>{item.title}</span>

                     <div>
                        <Link  to={`/movie/${item.id}`}>Ver detalhes</Link>
                        <button onClick={()=> deleteMovie(item.id)}>Excluir</button>
                     </div>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}