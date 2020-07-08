<<<<<<< HEAD
import React from 'react';
import './App.css';

function App() 
{

  function upload(){
    var input=document.getElementById("upload");
    var freader=new FileReader();
    freader.readAsDataURL(input.files[1]);
    freader.onload=function(){
document.getElementById("video").src=freader.result;
}
  }

function start(){

  document.getElementById("video").play();
}

  
return(
  <div   >
    <div >
<video width="720" height="480" controls="controls" id="video">
<source id="src"/>
  </video>
  </div>
<input type="file" accept="video*/" id="upload" onChange={upload()}/>
<button id="start" onClick={start()}>Start</button>

  </div>
  
  )

=======
import React from "react";
import "./App.css";

function App() {
  function upload() {
    var input = document.getElementById("upload");
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onload = function () {
      document.getElementById("video").src = freader.result;
    };
  }

  function download() {}

  return (
    <div>
      <video width="720" height="480" controls="controls" id="video">
        <source id="src" type="video/mp4" />
      </video>

      <div>
        <input type="file" accept="video/*" id="upload" onChange={upload} />

        <button id="src" onClick={download}>
          Download
        </button>
      </div>
      <button>Start</button>
    </div>
  );
>>>>>>> first commit
}

export default App;
