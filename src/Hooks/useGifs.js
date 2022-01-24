import { useState, useEffect, useContext } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'

export const useGifs = ({keyword} = {keyword: null} ) => {

    const [loading , setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    //const [gifs , setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        // Recuperamos la keyword del localstorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({keyword:keywordToUse})
        .then(gifs => {
            setGifs(gifs) 
            setLoading(false)
            localStorage.setItem('lastKeyword',keyword)
        })
    },[keyword, setGifs])

    return {gifs, loading}

}
