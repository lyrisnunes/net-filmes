import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home} from './Pages/Home/Home';
import {Movie} from './Pages/Movie/Movie';
import { Favorite } from './Pages/Favorite/Favorite';

import { Header } from './components/Header';
import { Erro } from './Pages/Erro/Erro';


export function RoutesApp(){
   return(
      <BrowserRouter>
      <Header/>
         <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route  path='/Movie/:id' element={<Movie/>}/>
            <Route path='/Favorite' element={ <Favorite/> } />

            <Route path='*' element={ <Erro/> } />
         </Routes>
      </BrowserRouter>
   )
}