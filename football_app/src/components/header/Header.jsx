import React from 'react'
import Searchbar from '../searchbar/Searchbar'
import './Header.css'
function Header() {
    return (
      <div className="header">

        <div>
          <h1>
            Logo
          </h1>
        </div>

        <Searchbar/>

      </div>
    )
}

export default Header
