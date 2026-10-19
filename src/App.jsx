
import './App.css'
import { Maincomponenet } from './components/Maincomponenet'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Studenttable } from './components/Studenttable';

function App() {

  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Maincomponenet/>}></Route>
      <Route path='/studenttable' element={<Studenttable/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
