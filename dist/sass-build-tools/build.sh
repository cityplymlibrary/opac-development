#!/bin/sh
sass ../../src/css/build.scss:./../OPACUserCSS.css --style compressed
echo "File built and outputted to dist folder (-1 level)"
