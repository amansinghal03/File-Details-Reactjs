import React from "react";


const Nav=({fileStatus , setFileStatus})=>{
    return(
        <nav>
         
            <button onClick={() => setFileStatus(!fileStatus)}>
                Show File
            
            </button>
        </nav>
    )
}
export default Nav 