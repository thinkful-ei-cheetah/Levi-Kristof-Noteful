import React from 'react';
import { NavLink } from 'react-router-dom'

const Folder = ({name, id}) => (
  <div className="folder">
  <NavLink to={`/${id}`} 
  activeClassName="selected" 
  activeStyle={{
    
    backgroundColor: "#FFFF00",
  }}
  >
    <h3>{name}</h3>
    </NavLink>
  </div>
)

export default Folder;