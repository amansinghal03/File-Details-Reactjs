import React from "react";
import Fileshow from "./fileshow";


const Fileinfo =({fileStatus , setFileStatus , selectedFolder, setSelectedFolder,folderName})=>{
    return (
        <div className={`container-file ${fileStatus ? 'active-container-file' : ""}`}>
            <h1>{folderName}</h1>
            <Fileshow selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder}/>
        </div>
    )
}

export default Fileinfo