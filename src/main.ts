import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

const startUrl = url.format({
	pathname: path.join( __dirname, "../dist/renderer.html" ),
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
	if ( process.platform !== "darwin" ) {
		app.quit();
	}
});
