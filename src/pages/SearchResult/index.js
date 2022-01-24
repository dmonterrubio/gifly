import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import Spinner from '../../components/Spinner'
import {useGifs}  from '../../Hooks/useGifs'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    return <>
        { 
            loading 
            ? <Spinner/> 
            : <>
                <h3 className='App-title'>{keyword}</h3>
                <ListOfGifs gifs={gifs}/> 
            </>
        }
    </>
}

export default React.memo(SearchResults)