const { app, BrowserWindow } = require('electron');

let mainWindow;

// screen size 1920x1080px
// node modules integration is enabled

function createWindow(){
    mainWindow = new BrowserWindow({
        width:1920,
        height:1080, 
        webPreferences:{
            nodeIntegration:true,
        },
        icon:"static/images/klavaro.ico",
    });

    // load index.html in screen
    mainWindow.loadFile('index.html');

    // if screen is closed then mainWindow should be nulled for better memory management
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
}

// when electron is ready then calls createWindow function to openn main window
app.whenReady().then(createWindow);

// its common for applications to remain active even if window is closed
// so check if all windows are closed and (process.platform !== 'darwin') means system is not macOs
// then close the app
app.on('window-all-closed',function(){
    if(process.platform !== 'darwin') app.quit();
});

// if app is active but no window is opens then opens the window 
app.on('activate', function(){
    if(mainWindow === null) createWindow();
});