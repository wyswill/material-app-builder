const {app, BrowserWindow, globalShortcut, dialog} = require("electron");
const packageJson = require("./package.json");
let mainWindow;


function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: packageJson.name,
    resizable: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      webSecurity: false
    }
  });

  mainWindow.loadURL("http://localhost:3000");

  // 注册快捷键
  globalShortcut.register('F12', () => {
    mainWindow.webContents.openDevTools();
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})