#!/bin/bash
# Image optimization script for Smotvisa
# Run this script from the project root: bash optimize-images.sh

set -e

echo "=== Converting tour PNGs to WebP ==="
for f in europe-tour thailand-tour dubai-tour uk-tour australia-tour; do
    echo "Converting ${f}.png -> ${f}.webp ..."
    cwebp -q 80 "public/images/${f}.png" -o "public/images/${f}.webp"
done

echo ""
echo "=== WebP file sizes ==="
ls -lh public/images/*.webp

echo ""
echo "=== Original PNG file sizes (for comparison) ==="
ls -lh public/images/europe-tour.png public/images/thailand-tour.png public/images/dubai-tour.png public/images/uk-tour.png public/images/australia-tour.png

echo ""
echo "=== Deleting unused files ==="
rm -v public/globe.svg
rm -v public/file.svg
rm -v public/window.svg
rm -v public/vercel.svg
rm -v public/icons/newlogo.png

echo ""
echo "=== NOTE: small--Y9qzfea.png is used in app/layout.tsx as OG/Twitter image ==="
echo "=== Skipping deletion of public/assets/small--Y9qzfea.png as it is referenced ==="

echo ""
echo "=== Done! ==="
echo "You may also want to:"
echo "1. Delete the original PNG tour images after verifying WebP works: rm public/images/*-tour.png"
echo "2. Replace Fevicon.png (54KB) with a proper small favicon.ico"