FROM hugomods/hugo:exts

EXPOSE 1313

WORKDIR /src

ENTRYPOINT ["hugo", "server", "--bind", "0.0.0.0", "--port", "1313", "--disableFastRender"]
