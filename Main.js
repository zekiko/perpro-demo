const {app, BrowserWindow} = require('electron')  
const path = require('path')

function createWindow () {   
  // Create the browser window.     
win = new BrowserWindow({width: 1000, height: 700}) 
       
// and load the index.html of the app.     

//win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
win.loadURL('http://localhost:3000/')

}

app.on('ready', createWindow)