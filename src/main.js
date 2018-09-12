// Basic init
const electron = require( "electron" );
const { app, BrowserWindow } = electron;
const path = require( "path" );
const url = require( "url" );

const startUrl = process.env.ELECTRON_START_URL || url.format({
	pathname: path.join( __dirname, "../dist/index.html" ),
	protocol: "file:",
	slashes: true
});

// To avoid being garbage collected
let mainWindow;

app.on( "ready", () => {

	mainWindow = new BrowserWindow({ width: 800, height: 600 });

	mainWindow.loadURL( startUrl );

	mainWindow.on( "closed", () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});

});

// Quit when all windows are closed.
app.on( "window-all-closed", () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if ( process.platform !== "darwin" ) {
		app.quit();
	}
});
