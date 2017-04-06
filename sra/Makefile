# This downloads and builds the SRA Toolkit binaries.

OS := $(shell uname)
VERSION := 2.3.5-2

ifeq ($(OS), Darwin)
	BUILD_TARGET := mac
else ifeq ($(OS), Linux)
	BUILD_TARGET := linux
endif

all: build

build: build_dir $(BUILD_TARGET)

build_dir:
	mkdir -p build

linux: build/sratoolkit.$(VERSION)-ubuntu64.tar.gz
	cd build; tar xzvf $(<F)
	mv build/$(patsubst %.tar.gz,%,$(<F))/bin bin

build/sratoolkit.$(VERSION)-ubuntu64.tar.gz:
	curl https://ftp-trace.ncbi.nlm.nih.gov/sra/sdk/$(VERSION)/$(@F) -o $@

mac: build/sratoolkit.$(VERSION)-mac64.tar.gz
	cd build; tar xzvf $(<F)
	mv build/$(patsubst %.tar.gz,%,$(<F))/bin bin

build/sratoolkit.$(VERSION)-mac64.tar.gz:
	curl https://ftp-trace.ncbi.nlm.nih.gov/sra/sdk/$(VERSION)/$(@F) -o $@

clean:
	rm -rf build bin

.PHONY: build clean mac linux
