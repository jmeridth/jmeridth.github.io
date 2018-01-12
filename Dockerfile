FROM jekyll/jekyll:latest

WORKDIR /tmp
ADD Gemfile /tmp/
ADD Gemfile.lock /tmp/
RUN bundle install

COPY . /jekyll
WORKDIR /jekyll

EXPOSE 4000
ENTRYPOINT ["jekyll", "serve", "--livereload"]
