import {RoutesApp} from './routes';
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// styles
import './global.css'
import styles from './App.module.css';

export function App(){
  return(
      <div className={styles.app}>
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
      </div>
  )
}
