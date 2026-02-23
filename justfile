# Run Hugo dev server in Docker with live-reload
run:
    docker run --rm -p 1313:1313 -v $(pwd):/src hugomods/hugo:exts hugo server --bind 0.0.0.0 --port 1313 --disableFastRender
