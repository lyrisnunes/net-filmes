import styles from './Erro.module.css'

import { Link } from 'react-router-dom'

export function Erro(){
   return(
      <div className={styles.notfound}>
         <h1>404</h1>
         <h2>Página não encontrada</h2>
         <Link to="/">Veja todos filmes</Link>
      </div>
   )
}