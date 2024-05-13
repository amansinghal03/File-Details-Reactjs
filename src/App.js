import React , { useState , useRef }from 'react'
import './App.css';
import './styles/app.scss';
import Nav from "./components/nav";
import File from "./components/file";
import Fileinfo from "./components/fileinfo";

let folderName;
function App() {

  const[fileStatus, setFileStatus]=useState(false)
  const [selectedFolder, setSelectedFolder] = useState(null);
  const fileInputRef = useRef(null);
  // /////////////////////////////////////////

  const handleButtonClick = () => {
    fileInputRef.current.directory = true;
    fileInputRef.current.webkitdirectory = true;
    fileInputRef.current.mozdirectory = true;
    fileInputRef.current.click();

};

const handleFileSelect = (event) => {
    const files = event.target.files;
    const firstFilePath = files[0].webkitRelativePath;
    folderName = firstFilePath.split('/')[0];

    console.log("ab to pkka file ka naame aayega", folderName)

    if (files.length > 0) {
        setSelectedFolder(Array.from(files).sort((a, b) => a.name.localeCompare(b.name)));
    }
};
console.log("bhar bhi chl rh h:",folderName)
/////////////////////////////////////////////////////

  return (
    <div className="App">
      
      <h1>Upload Your File Here !!!
      </h1>
      <Nav fileStatus={fileStatus} setFileStatus={setFileStatus}/>
      <File selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} handleFileSelect={handleFileSelect} handleButtonClick={handleButtonClick} fileInputRef={fileInputRef} />
      <Fileinfo fileStatus={fileStatus} setFileStatus={setFileStatus} selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} folderName={folderName}/>
    </div> 
  );
}

export default App;
