import React , { useState }from "react";

const Fileshow =({selectedFolder, setSelectedFolder})=>{

  const [sortedFiles, setSortedFiles] = useState([]);
//////////////////////////////////

    const formatFileSize = (size) => {
        if (size < 1024) {
          return `${size} bytes`;
        } else if (size < 1024 * 1024) {
          return `${(size / 1024).toFixed(2)} kB`;
        } else if (size < 1024 * 1024 * 1024) {
          return `${(size / (1024 * 1024)).toFixed(2)} MB`;
        } else if (size < 1024 * 1024 * 1024 * 1024) {
          return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
        } else {
          return `${(size / (1024 * 1024 * 1024 * 1024)).toFixed(2)} TB`;
        }
      };

///////////////////////////////////////////////

      const showFileDetails = (file) => {
        console.log("the file informations is ",file)
        alert(`
          File Name: ${file.name.replace(/\.[^/.]+$/, '')}
          File Extension: ${file.name.split('.').pop()}
          File Size: ${formatFileSize(file.size)}
        `);
      };

  ////////////////////////////////////////////////
  
  const sortFilesByExtension = () => {
    const sorted = [...selectedFolder].sort((fileA, fileB) => {
      const extensionA = fileA.name.split(".").pop().toLowerCase();
      const extensionB = fileB.name.split(".").pop().toLowerCase();

      return extensionA.localeCompare(extensionB);
    });

    setSortedFiles(sorted);
  };

///////////////////////////////////////////////

    const renderTable = () => {
      const filesToRender = sortedFiles.length > 0 ? sortedFiles : selectedFolder;
        if (filesToRender) {
          return (
            <table className="table">
              <thead>
                <tr>
                  <th>File name</th>
                  <th>File size</th>
                  <th>File Extension</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                {filesToRender.map((file, index) => (
                  
                  
                  <tr key={index}>
                    <td>{file.name.replace(/\.[^/.]+$/, '')}</td>
                    <td>{formatFileSize(file.size)}</td>
                    <td>{file.name.split('.').pop()}</td>
                    <td>
                      <button className="info-button" onClick={() => showFileDetails(file)}>Info</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        }
        // console.log("the filee issssss ",file);
        return null;
      };
/////////////////////////////////////////////////


    return(
       <div className="file-show">
         <button onClick={sortFilesByExtension}>Sort by Extension</button>
        
      {renderTable()}
    </div>
    );
};

export default Fileshow;