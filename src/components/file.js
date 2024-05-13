import React, { useRef, useState } from "react";


const File = ({ selectedFolder, setSelectedFolder,handleButtonClick,handleFileSelect,fileInputRef}) => {
    // const fileInputRef = useRef(null);


    // const handleButtonClick = () => {
    //     fileInputRef.current.directory = true;
    //     fileInputRef.current.webkitdirectory = true;
    //     fileInputRef.current.mozdirectory = true;
    //     fileInputRef.current.click();

    // };

    // const handleFileSelect = (event) => {
    //     const files = event.target.files;
    //     const firstFilePath = files[0].webkitRelativePath;
    //     const folderName = firstFilePath.split('/')[0];

    //     console.log("ab to pkka file ka naame aayega", folderName)

    //     if (files.length > 0) {
    //         setSelectedFolder(Array.from(files).sort((a, b) => a.name.localeCompare(b.name)));
    //     }
    // };


    return (
        <div className="container">
            <h2 className="title">Upload File</h2>
            <h3 className="subtitle">And Know about the Information<br /> About the file</h3>
            <div className="folder-selection">
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                    multiple
                    webkitdirectory=""
                    mozdirectory=""
                    directory=""
                />

                <button className="upload-btn" onClick={handleButtonClick}>Select Folder</button>
            </div>
        </div>
    );
};
export default File 