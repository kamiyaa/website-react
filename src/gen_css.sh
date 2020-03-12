#!/bin/sh

date
echo '=========='

CSS_DIR=css
SASS_DIR=scss

mkdir -p "$CSS_DIR"

for f in `ls "$SASS_DIR"`
do
	css_f="${f%%.*}.css"
	echo "compiling $SASS_DIR/$f -> $CSS_DIR/$css_f"
	sassc "$SASS_DIR/$f" > "$CSS_DIR/$css_f"
done
