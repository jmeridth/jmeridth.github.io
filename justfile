# Run Hugo dev server in Docker with live-reload
run:
    docker run --rm -p 1313:1313 -v $(pwd):/src hugomods/hugo:exts hugo server --bind 0.0.0.0 --port 1313 --disableFastRender

lint:
    markdownlint-cli2 "content/**/*.md" --fix
    actionlint

# Check internal links (fast, offline)
links:
    hugo --minify --quiet --baseURL / -d public
    lychee --config lychee.toml --offline --root-dir "$(pwd)/public" 'public/**/*.html'

# Check internal and external links (slow; what the weekly CI scan reports)
links-external:
    hugo --minify --quiet --baseURL / -d public
    lychee --config lychee.toml --root-dir "$(pwd)/public" 'public/**/*.html'
