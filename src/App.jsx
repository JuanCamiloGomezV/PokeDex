import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import PokemonContainer from './container/PokemonContainer/PokemonContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<PokemonContainer />}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
