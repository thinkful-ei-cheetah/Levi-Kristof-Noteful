import React from 'react';
import { Link } from 'react-router-dom'

const Folder = ({name, id}) => (
  <Link to={`/${id}`}><div className="folder">
    <h3>{name}</h3>
  </div></Link>
)

export default Folder;