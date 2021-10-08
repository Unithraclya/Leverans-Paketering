import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'


export default function Electron() {
const { ipcRenderer } = require('electron');
const remote = require('@electron/remote');

// Use dialog via remote
const { app } = remote;
const { dialog } = remote;
const history = useHistory()

// Use the fs and paths modules from node
const fs = require('fs');
const path = require('path');
const [change, setChange] = useState(0);

ipcRenderer.removeAllListeners('menuChoice')    
ipcRenderer.on('menuChoice', (ipcEvent, menuItemLabel) => {
    // Save the text from the textarea in JSON format
    let fileExtensionToUse = 'likes';
    if (menuItemLabel === 'Save likes') {
      let filePath = dialog.showSaveDialogSync({
        properties: ['createDirectory']
      });
      if (filePath) {
        // add extension if missing
        if (
          filePath.slice(-fileExtensionToUse.length - 1) !==
          '.' + fileExtensionToUse
        ) {
          filePath += '.' + fileExtensionToUse;
        }
        // save text as json
        fs.writeFileSync(
          filePath,
          JSON.stringify(localStorage.LikedPosters, null, '  '),
          'utf-8'
        );

        //temp remove likes
        delete localStorage.LikedPosters 

        //use Thomas hack trick
        history.push('/')



      }
    }


    // Load the text from the textarea in JSON format
    if (menuItemLabel === 'Load likes') {
      let filePaths = dialog.showOpenDialogSync({
        properties: ['openFile'],
        options: { filters: { extensions: [fileExtensionToUse] } }
      });

      
      if (filePaths) {
          
        let json = fs.readFileSync(filePaths[0], 'utf-8');
        console.log(json);
        // let data = JSON.parse(json);
        localStorage.LikedPosters = json
        history.push('/')

      }

    }
   
}    
);


    return (
        <div>
            <h1>Hello Electron</h1>

        </div>
    )
}
