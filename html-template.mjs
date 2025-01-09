const url = "https://kristorres.pages.dev"

const app = {
    name: "Trebek",
    description: "A Jeopardy! game board interface used at (virtual) office happy hours, trivia nights, or other fun events.",
    image: `${url}/images/jcon.png`,
    url: `${url}/trebek`,
}

const htmlTemplate = (options) => `<!DOCTYPE html>
<html>
    <head>
        <title>${app.name} | Kris Torres</title>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />

        <meta name="author" content="Kris Torres" />
        <meta name="description" content="${app.description}" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="${app.name}" />
        <meta property="og:description" content="${app.description}" />
        <meta property="og:image" content="${app.image}" />
        <meta property="og:url" content="${app.url}" />

        <meta name="theme-color" content="#4955d8" />

        <link rel="icon" type="image/png" href="/images/jcon.png" />
        <link rel="apple-touch-icon" type="image/png" href="/images/jcon.png" />

        <link rel="manifest" type="application/json" href="manifest.json" />
    </head>
    <body>
        <style ws-root>
            html {
                -webkit-text-size-adjust: none;
            }

            .ws-style {
                --no-select:
                    "-webkit-user-select: none"
                    "user-select: none"
                ;
            }
        </style>
        <script type="module" src="${options.files.js[0].fileName}"></script>
    </body>
</html>
`

export default htmlTemplate
