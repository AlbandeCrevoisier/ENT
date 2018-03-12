## Requirements

Requires nodejs >= v4 to run packager.

To build for Windows with an icon, if you're on Mac, Wine must be installed (`brew install wine`)

## Developing

`yarn run dev` will run Electron in development mode and point it at [http://localhost:4000]()

`yarn run build` will package the app into `.app` files, `.exe` files, and whatever Linux uses.

`yarn run build-mac` will package the app into a `.app` file.  Use this because packaging for all at once is broken.

Packaging for all at once requires Wine, because it's needed for making the icon for Windows.  Wine is annoying to install, so building just for Mac is easier.
