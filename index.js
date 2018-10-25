const {
    app,
    BrowserWindow
} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        icon: 'content/img/icon.png',
        width: 1280,
        height: 720,
        zoomToPageWidth: true,
        frame: false
    });

    win.loadFile('content/index.html');

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});