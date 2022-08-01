import React, {useState} from 'react'
import Wording from './Wording'
import data from './data.json'
import { Link } from 'react-router-dom';

function Artists() {
    const [value, setValue] = useState(data)
    
  return (
    <div className='wrapper'>
        <Wording />
        <picture>
            <img src="./art.jpeg" alt="art" />
        </picture>
        <h2>Artists</h2>
        <section>
            {
                value.artists.map((item)=>(
                  <div className='content' key={item.id}>
                    <div className='name'>{item.name}</div>
                    <div className='info' dangerouslySetInnerHTML={{__html: item.texts[0].body}}></div>
                    <Link to={`/artist/${item.id}`} className='btn'>artworks</Link>
                  </div>  
                ))
            }
        </section>
    </div>
  )
}

export default Artists