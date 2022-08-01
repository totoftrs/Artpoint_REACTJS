import React from 'react'
import data from './data.json'
import { Link } from 'react-router-dom';

function Wording() {
  return (
    <header>
        <Link to="/" className='h1'>{data.title}</Link>
        <div className='text'>{data.text}</div>
    </header>
  )
}

export default Wording