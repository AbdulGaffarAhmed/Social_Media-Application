import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='Logosearch'>
      <img src='https://openclipart.org/image/2400px/svg_to_png/221725/Social-Media-Tree.png' alt='logo' className='logo'/>
        <div className='Search'>
          <input type="text" placeholder='#Search'/>
          <div className='s-icon'>
          </div>
        </div>
    </div>
  )
}

export default Search