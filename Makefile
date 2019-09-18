.PHONY: test build

test:
		parcel serve --no-hmr --target browser --no-source-maps test/index.pug

build:
		parcel build --target browser --no-source-maps --out-dir build/ src/github-activity.css src/github-activity.js