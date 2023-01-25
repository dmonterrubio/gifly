import { useState, useEffect, useContext } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'

const INITIAL_PAGE = 0

const useGifs = ({keyword} = {keyword: null} ) => {

    const [loading , setLoading] = useState(false)
    const [nextPageLoading, setNextPageLoading] = useState(false)
    const [page, setPage] =  useState(INITIAL_PAGE)

    const {gifs, setGifs} = useContext(GifsContext)
 
    // Recuperamos la keyword del localstorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {

        setLoading(true)
        getGifs({keyword:keywordToUse})
            .then(gifs => {
                setGifs(gifs) 
                setLoading(false)
                localStorage.setItem('lastKeyword',keyword)
            })
        },[keywordToUse,keyword, setGifs])

    useEffect(() => {

        if(page === INITIAL_PAGE) return

        setNextPageLoading(true)
        getGifs({keyword:keywordToUse, page})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setNextPageLoading(false)
            }
            )
    },[keywordToUse, page, setGifs])


    return { loading, nextPageLoading, gifs, setPage }
}

export default useGifs
