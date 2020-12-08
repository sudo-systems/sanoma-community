const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    title: 'Sanoma Community Platform',
    icon: './assets/images/logo.png',
    width: 800,
    height: 600,
    center: true,
    useContentSize: false,
    fullscreenable: true,
    simpleFullscreen: true,
    backgroundColor: '#1E1E1E',
    darkTheme: true
  })

  mainWindow.loadURL('https://community.sanomalearning.com/', {
    webPreferences: {
      plugins: true
    }
  })
  mainWindow.removeMenu()
  mainWindow.maximize(true)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
