import React from 'react';
import Folder from './Folder';
import './Sidebar.css'

const Sidebar = ({folders, singleNote}) => {
  const btn = singleNote ? 
    <button className="add-folder">Go Back</button> :
    <button className="add-folder">Add Folder</button>

    //const selectedFolder = folders.find(item =>item.id ===singleNote.id)


   const allFolders = folders.map(folder => <Folder name={folder.name} id ={folder.id} key= {folder.id}/>)

  return(

    <div className="Sidebar">
      <ul>
        {allFolders}
        {/* {singleNote !== typeof  ? selectedFolder.id : allFolders } */}
      </ul>
      {btn}
    </div>
  )

};

export default Sidebar;

