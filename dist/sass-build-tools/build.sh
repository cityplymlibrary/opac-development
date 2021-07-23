#!/bin/sh

#
# a script to build the scss files and output them as dist/OPACUserCSS.css
#
# required: npm
# deb:		sudo apt install npm -y
# brew:		brew install npm
# winget:	winget install -e --id OpenJS.Nodejs
#
# required: sass
# npm:		sudo npm install -g sass
#

sass ../../src/css/build.scss:./../OPACUserCSS.css --style compressed
echo "File built and outputted to dist folder (-1 level)"
