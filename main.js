const {BrowserWindow, app} = require("electron")

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1600,
        height: 900,
        minWidth: 1600,
        minHeight: 900,
    })

    window.loadFile("build/index.html")
}

app.whenReady()
    .then(
        () => {
            createWindow()

            app.on(
                "activate",
                () => {
                    const windowCount = BrowserWindow.getAllWindows().length

                    if (windowCount > 0) {
                        return
                    }

                    createWindow()
                }
            )
        }
    )

app.on("window-all-closed", app.quit)
