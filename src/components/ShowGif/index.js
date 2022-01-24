import React from 'react'

const ShowGif = ({params}) => {
    const {id} = params
    console.log(id)

return (
     <img src={`https://media2.giphy.com/media/${id}/giphy.gif`} alt="gif"/>
    )
}

export default ShowGif