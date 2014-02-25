.. title: OAuth
.. link: http://lostechies.com/jasonmeridth/2010/04/05/oauth/
.. description: 
.. date: 2010/04/05 04:25:00
.. slug: oauth
.. type: text


UPDATE: Fixed puts statements.  should have been x.token, not x.key.

I have gotten tired of twitterfeed not handling our RSS feed and tweeting our new posts. So have the other LosTechies members. I decided to finally learn OAuth so that I can write a script/app to handle tweeting our new blog posts.

This is the way I learned so bare with me.

First things first, is you have to go to [twitter](http://twitter.com) and login to your account. Once done, register your [OAuth application](http://twitter.com/oauth_clients) and click the [Register a new application](http://twitter.com/apps/new) link. This will set you up with an OAuth consumer key and secret; which we need to obtain the OAuth request token/secret and our ultimate goal of an OAuth access token/secret.

Required fields that I had to fill out were:

  1. Application Name
  2. Descriptions
  3. Application Website
  4. Application Type (I chose Client)
  5. Default Access Type (I chose Read & Write)
  6. ReCaptcha at the bottom.

![](http://c1261852.cdn.cloudfiles.rackspacecloud.com/twitter_new_oauth_app.png)

Once accepted you’ll be directed to a page displaying your consumer key and secret, like this:

![](http://c1261852.cdn.cloudfiles.rackspacecloud.com/oauth_consumer_key_and_secret.png)

I’ve looked at a few ways to do this and the easiest that I found was by using the [twitter_oauth gem](http://github.com/moomerman/twitter_oauth). Following the README for this gem I was able to get an access token/secret pretty easily.

I’m doing all of this through IRB because there is one part where you need to open a web page and allow your twitter client to post to Twitter.
    
    
    ~ > irb
    irb(main):001:0$ require 'rubygems'
    => true
    irb(main):002:0$ require 'twitter_oauth'
    => true
    irb(main):003:0$ client = TwitterOAuth::Client.new(
    irb(main):004:1* :consumer_key => 'YOUR_APP_CONSUMER_KEY',
    irb(main):005:1* :consumer_secret => 'YOURA_APP_CONSUMER_SECRET')
    )
    => ...object output...
    irb(main):005:0$ request_token = client.request_token
    => ...object output...
    irb(main):006:0$ puts request_token.token, request_token.secret
    => [REQUEST_TOKEN]
    => [REQUEST_SECRET]
    irb(main):007:0$ request_token.authorize_url
    => http://twitter.com/oauth/authorize?oauth_token=TOKEN
    

Copy that url and put it into your browser of choice. When the “Deny” and “Allow” buttons become visible, click the “Allow” button. You will be presented with a numeric PIN. Copy that number into your clipboard because we’re going to use it on this final step to obtain the OAuth Access Token and Secret.
    
    
    irb(main):007:0$ access_token = client.authorize(
    irb(main):008:1*   request_token.token,
    irb(main):009:1*   request_token.secret,
    irb(main):0010:1*  :oauth_verifier => 'THE_NUMERIC_PIN_YOU_GOT_FROM_TWITTER'
    irb(main):0011:1* )
    => ...object output...
    irb(main):0011:0$ puts access_token.token, access_token.secret
    => [ACCESS_TOKEN]
    => [ACCESS_SECRET]
    irb(main):0012:0$ client.authorized?
    => true
    

You now have everything you need to use the TwitterOAuth gem without having to authenticate everytime.
    
    
    irb(main):0013:0$ client = TwitterOAuth::Client.new(
    irb(main):0014:1*    :consumer_key => 'YOUR_CONSUMER_KEY',
    irb(main):0015:1*    :consumer_secret => 'YOUR-CONSUMER-SECRET',
    irb(main):0016:1*    :token => access_token.token, 
    irb(main):0017:1*    :secret => access_token.secret
    )
    => ...object output...
    irb(main):0017:0$ client.authorized?
    => true
    

To tweet something after you have the client instance, just call the update method: 
    
    
    client.update('test tweet with OAuth')
    

That is how I figured out OAuth without a callback URL. Hacky, but it works.