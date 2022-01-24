import React from 'react'
import Gif from '../Gif'
import './ListOfGifs.css'

const ListOfGifs = ({gifs}) => {
  
    return <div className="ListOfGifs">
      {
          gifs.map( ({title, id , url}) => 
            <Gif 
              title={title} 
              id={id} 
              url={url}
              key={id}
            />
          )
      }
    </div>
}

export default ListOfGifs