package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"time"

	"github.com/evanw/esbuild/pkg/api"
)

const (
	Reset  = "\033[0m"
	Red    = "\033[31m"
	Green  = "\033[32m"
	Yellow = "\033[33m"
	Blue   = "\033[34m"
	Purple = "\033[35m"
	Cyan   = "\033[36m"
	Gray   = "\033[37m"
	White  = "\033[97m"
)

var htmlPlugin = api.Plugin{
	Name: "htmlPlugin",
	Setup: func(build api.PluginBuild) {
		build.OnEnd(func(result *api.BuildResult) {
			// Get the name of the bundle file
			for _, file := range result.OutputFiles {
				filename := strings.Split(file.Path, "/")[len(strings.Split(file.Path, "/"))-1]
				fileExtension := strings.Split(filename, ".")[len(strings.Split(filename, "."))-1]
				if fileExtension == "js" {
					content, err := ioutil.ReadFile("src/index.html")
					if err != nil {
						panic(err)
					}

					injectedHTML := bytes.Replace(content, []byte("</body>"), []byte("  <script src=\""+filename+"\"></script>\n  </body>"), 1)
					err = ioutil.WriteFile("dist/index.html", injectedHTML, 0644)
					if err != nil {
						panic(err)
					}
				}
			}
			fmt.Println(Green, "HTML file created successfully", Reset)
		})
	},
}

func main() {
	t := time.Now()
	result := api.Build(api.BuildOptions{
		EntryPoints: []string{"src/index.tsx"},
		Bundle:      true,
		Loader: map[string]api.Loader{
			".png": api.LoaderFile,
		},
		Metafile:          true,
		MinifyWhitespace:  true,
		MinifyIdentifiers: true,
		MinifySyntax:      true,
		Write:             true,
		Outfile:           "dist/app.js",
		Plugins:           []api.Plugin{htmlPlugin},
	})

	if len(result.Errors) > 0 {
		for _, err := range result.Errors {
			fmt.Println(err.Text)
		}
		os.Exit(1)
	}

	fmt.Println(time.Since(t))
}
