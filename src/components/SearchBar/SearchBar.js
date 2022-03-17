/* eslint-disable jsx-a11y/anchor-is-valid */
import './SearchBar.css';
import { useState } from 'react';

const SearchBar = ({onSearch}) => {

  const[searchTerm,setSearchTerm] =useState("")

  const search =() =>{
    onSearch(searchTerm)
    setSearchTerm('')
  }

  const handleTermChange =(e) =>{
    setSearchTerm(e.target.value)
  }

  return <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" value={searchTerm} onChange={handleTermChange}/>
  <button className="SearchButton" onClick={search}>SEARCH</button>
</div>;
}

export default SearchBar;
