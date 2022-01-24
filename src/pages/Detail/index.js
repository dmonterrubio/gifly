import React from 'react'
import Gif from '../../components/Gif'
import useGlobalGifs from '../../Hooks/useGlobalGifs'

const Detail = ({params}) => {
    const gifs = useGlobalGifs()
    const gif = gifs.find(findGif => findGif.id === params.id)

    return <Gif {...gif}/>

}

export default Detail