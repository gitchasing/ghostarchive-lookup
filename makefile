# Copyright 2025 gitchasing
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may not
# use this file except in compliance with the License. You may obtain a copy of
# the License at
#
#     http:#www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations under
# the License.

name = ghostarchive-lookup

all: build/chrome/$(name).zip \
build/firefox/$(name).zip

build/chrome:
	mkdir -p $@

build/chrome/background.js: chrome/background.js
	minify $< -o $@

build/chrome/manifest.json: chrome/manifest.json
	minify $< -o $@

build/chrome/icon.png: icon.png
	cp -r $< $@

build/chrome/options.html: common/options.html
	minify $< -o $@

build/chrome/options.js: chrome/options.js
	minify $< -o $@

build/chrome/$(name).zip: build/chrome \
build/chrome/background.js \
build/chrome/manifest.json \
build/chrome/icon.png \
build/chrome/options.html \
build/chrome/options.js
	zip -j $@ $(wordlist 2, $(words $^), $^)

build/firefox:
	mkdir -p $@

build/firefox/background.js: firefox/background.js
	minify $< -o $@

build/firefox/manifest.json: firefox/manifest.json
	minify $< -o $@

build/firefox/icon.png: icon.png
	cp $< $@

build/firefox/options.html: common/options.html
	minify $< -o $@

build/firefox/options.js: firefox/options.js
	minify $< -o $@

build/firefox/$(name).zip: build/firefox \
build/firefox/background.js \
build/firefox/manifest.json \
build/firefox/icon.png \
build/firefox/options.html \
build/firefox/options.js
	zip -j $@ $(wordlist 2, $(words $^), $^)