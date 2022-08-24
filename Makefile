.PHONY: deps build static-assets build-and-gen

default: build-and-gen

deps:
	yarn install

build:
	yarn build

static-assets:
	yarn gen-assets

build-and-gen: deps build static-assets