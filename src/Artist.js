import React from 'react'
import {useParams} from "react-router";
import data from './data.json'
import Wording from './Wording'



function Artist() {
const {id} = useParams()
const findArtist = data.artists.find(elem => elem.id === id)
  return (
    <div className='wrapper'>
        <Wording />
        <div className='wrapper-artist'>
            <div className='artist-name'>{findArtist.name}</div>
            <div className='artist-info'>
                {findArtist.artworks.length === 0 && (<h1>Not Artworks ...</h1>)}
                {findArtist.artworks.map((elem)=> (
                    <div className='container-info' key={elem.id}>
                        <div className='slug'>{elem.slug}</div>
                        <div className='texts' dangerouslySetInnerHTML={{__html: elem?.texts[0]?.body}}></div>
                    </div>  
                ))}
            </div>
        </div>
    </div>
   
  )
}

export default Artist

