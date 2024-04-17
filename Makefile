.PHONY: deps build static-assets build-and-gen

default: deps build static-assets

deps:
	yarn install --frozen-lockfile --production

build:
	yarn build

static-assets:
	yarn gen-assets
