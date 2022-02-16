FROM klakegg/hugo:ext-ubuntu

COPY . /src
WORKDIR /src

EXPOSE 1313
CMD ["server"]
