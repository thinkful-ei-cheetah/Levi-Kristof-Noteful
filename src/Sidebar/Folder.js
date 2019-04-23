import React from 'react';
import { NavLink } from 'react-router-dom'

const Folder = ({name, id, apples}) => (
  <NavLink to={`/${id}`} 
  activeClassName="selected" 
  activeStyle={{
    backgroundColor:(136, 217, 253),
  }}
  ><div className="folder">
    <h3>{name}</h3>
  </div></NavLink>
)

export default Folder;