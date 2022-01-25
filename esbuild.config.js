const esbuild = require('esbuild')
const { htmlPlugin } = require('@craftamap/esbuild-plugin-html')

const options = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  loader: {
    '.png': 'file',
  },
  metafile: true, // needs to be set
  outdir: 'dist/', // needs to be set
  plugins: [
    htmlPlugin({
      files: [
        {
          entryPoints: ['src/index.tsx'],
          filename: 'index.html',
          htmlTemplate: `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Netflix</title>
                <link
                  rel="shortcut icon"
                  href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
                />
              </head>
              <body>
                <div id="app"></div>
              </body>
            </html>          
          `,
        },
      ],
    }),
  ],
}

esbuild.build(options).catch(() => process.exit(1))
