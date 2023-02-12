import React, {useState,useEffect} from 'react'
import PokemonList from '../../components/PokemonList/PokemonList';
import { useParams } from 'react-router-dom';
import './PokemonContainer.css'
import {MdOutlineNavigateBefore,MdOutlineNavigateNext} from 'react-icons/md'
import LoaderContainer from '../../components/LoaderContainer/LoaderContainer';

const PokemonContainer = () => {
    const [resultado, setResultado] = useState({ cargando: true, data: null })
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const {type} = useParams();
    const estado = resultado;
    useEffect(() => {
      if (type)
            try {
                fetch(url)
                    .then(response => response.json())
                    .then(res => res = res.pokemon)
                    .then(data => data = data.map(p => p.pokemon))
                    .then(data => console.log(data))
                    .then(data => setResultado({ cargando: false, data: data }))
            } catch (e) {
                console.log(e)
            }
        else {
            try {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setResultado({ cargando: false, data: data }));
            } catch (e) {
                console.log(e)
            }
        }
      }, [type,url])
    
    const {cargando,data} = estado;
  return (
    cargando?
    <div className='d-flex justify-content-center align-items-center'>
      <LoaderContainer/>
    </div>
    
    :
    <div className="container-pokemon m-0 p-0 d-flex flex-column justify-content-center">
        <div className='w-100 d-flex flex-row justify-content-center'>
            {data.previous &&  <button onClick={()=>{setUrl(data.previous)}} className='mx-1 my-5'><MdOutlineNavigateBefore className='arrow'/></button>}
            {data.next && <button onClick={()=>{setUrl(data.next)}} className='mx-1 my-5'><MdOutlineNavigateNext className='arrow'/></button>}
        </div>
         
        <PokemonList results={type?data:data.results} type={type && type}/>
        <div className='w-100 d-flex flex-row justify-content-center'>
            {data.previous &&  <button onClick={()=>{setUrl(data.previous)}} className='mx-1 my-5'><MdOutlineNavigateBefore className='arrow'/></button>}
            {data.next && <button onClick={()=>{setUrl(data.next)}} className='mx-1 my-5'><MdOutlineNavigateNext className='arrow'/></button>}
        </div>
      </div>
  )
}

export default PokemonContainer