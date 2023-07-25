import {Link} from 'react-router-dom'

import styles from './Header.module.css'

export function Header(){
   return(
       <header>
        <Link className={styles.logo} to="/">NET<span>.</span>FILMES</Link>
        <Link className={styles.favorite} to="/favorite">Meus filmes favoritos</Link>
       </header>
   )
 }
 