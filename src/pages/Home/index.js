import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../Hooks/useGifs'
import Category from '../../components/Category'

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"]

const Home = () => {
    const [ keyword, setKeyword ] = useState('')
    const { loading , gifs } = useGifs()
    //hook useLocation un array el primero es el path mientras que el segunto te hace un TO a la ruta deseada
    const [path, pushLocation] = useLocation()

    // se ejecuta cuando hagamos submit del formulario
    const handleSubmit = evn => {
        //navegar a otra ruta
        evn.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    // se ejecuta cuando le demos a buscar / cambiemos algo en el input
    const handleChange = evn => {
        setKeyword(evn.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input type="text" placeholder="search a Gif here..." 
                    value={keyword} onChange={handleChange}/>
            </form>
            <div className="App-main">
                <div className='App-results'>
                    <h3 className='App-title'>
                        Última Búsqueda
                    </h3>
                    <ListOfGifs gifs={gifs}/> 
                </div>
                <div className='App-category'>
                    <Category name="Categorias populares" options={POPULAR_GIFS}/>
                    <Category name="Hierbas Populares" options={['weed', 'flowers', 'onions', 'trippi', 'acid', 'random']} />
                </div>
                

            </div>
        </>
       
    )

  
}

export default Home