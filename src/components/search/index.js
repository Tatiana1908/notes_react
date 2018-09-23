import React from 'react';
import './style.css'; 

function Search(props) {
  return (  
    <div className="d-flex search-wrap">
      <input type="text" placeholder="Search" name="searchText" onChange={props.onSeachFilterChange}/>
      <div>
          <input type="radio" name="fieldForSearch" value="title" id="title" onChange={props.onSeachFilterChange} />
          <label htmlFor="title">Title</label>
      </div>
      <div>
          <input type="radio" name="fieldForSearch" value="content" id="content" onChange={props.onSeachFilterChange}/>
          <label htmlFor="content">Content</label>
      </div>
    </div>
  );
}

export default Search;