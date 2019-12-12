import React from 'react'

import './search-box.styles.css'

const SearchBox = () => (
  <input
    className='search'
    type="search"
    placeholder={}
    onChange={e => this.setState({searchField: e.target.value})}
  />
)
