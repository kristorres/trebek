const {BrowserWindow, Menu, app} = require("electron")

const macOS = (process.platform === "darwin")

const role = (name) => ({role: name})
const separator = {type: "separator"}

const appSubmenu = {
    label: app.name,
    submenu: [
        role("about"),
        separator,
        role("services"),
        separator,
        role("hide"),
        role("hideOthers"),
        role("unhide"),
        separator,
        role("quit"),
    ],
}

const fileSubmenu = {
    label: "File",
    submenu: [
        role(macOS ? "close" : "quit"),
    ],
}

const viewSubmenu = {
    label: "View",
    submenu: [
        role("reload"),
        role("forceReload"),
        role("toggleDevTools"),
        separator,
        role("togglefullscreen"),
    ],
}

const windowSubmenu = {
    label: "Window",
    submenu: [
        role("minimize"),
        role("zoom"),
        role(macOS ? "front" : "close"),
    ],
}

const createMenu = () => {
    const template = [
        ...(macOS ? [appSubmenu] : []),
        fileSubmenu,
        viewSubmenu,
        windowSubmenu,
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

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
            createMenu()
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
