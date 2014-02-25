.. title: Selenium-client and fun
.. link: http://lostechies.com/jasonmeridth/2009/02/12/selenium-client-and-fun/
.. description: 
.. date: 2009/02/12 04:35:00
.. slug: selenium-client-and-fun
.. type: text


So I've had the pleasure of working with [selenium-client](http://github.com/ph7/selenium-client/tree/master), the official Ruby client API for Selenium Remote Control (bare bone client driver). Assumptions: 1\. You have Ruby 1.8+ installed 2\. You have rubygems installed I'm going to use the Slicehost Manage website to drive with my selenium tests. No babble, just instructions. 

1\. 
    
    
    sudo gem install selenium-client
    

2\. download the [selenium remote control](http://release.seleniumhq.org/selenium-remote-control/1.0-beta-2/selenium-remote-control-1.0-beta-2-dist.zip) (version 1.0 beta at the time of this entry). Remember where you install this because you will be reference the selenium-server.jar inside it. 

3\. update your .bashrc (usually on Ubuntu) or .bash_profile (what I have on my Mac) with a alias to start the selenium server (for me I have unzipped the download into a ~/code/seleniumrc folder: 
    
    
    # commands
    alias selsrvr="java -jar ~/code/seleniumrc/selenium-server-1.0-beta-2/selenium-server.jar"
    

after you add that, re-source your bash file. For me on my Mac 
    
    
    . ~/.bash_profile
    

For me on my Ubuntu box: 
    
    
    . ~/.bashrc
    

4\. Create a test file, test.rb somewhere (for me ~/code/seleniumrc/test.rb): 

5\. Write a test that: 

  1. Logs in   

  2. Creates a slice   

  3. Captures the new root password   

  4. Captures the new IP Address   

  5. SSHs onto the new slice   

  6. Adds a file, and lists out the content of ~ (aka /home/root)   

  7. Deletes the slice   

  8. Logs out

6.
    
    
    require "test/unit"
    require "rubygems"
    gem "selenium-client", ">=1.2.9"
    require "selenium/client"
    require "net/ssh"
    
    class NewTest < Test::Unit::TestCase
      attr_reader :browser
    
      def setup
        @slice_name = "slice3"
        @browser = Selenium::Client::Driver.new "localhost", 4444, "*firefox", "https://manage.slicehost.com/", 10000
        browser.start_new_browser_session
      end
    
      def teardown
        browser.close_current_browser_session
      end
    
      def test_should_be_able_to_ssh_onto_new_slice_and_add_new_file
        login
        begin
            create_slice(@slice_name)
            root_password = @browser.get_text("id=flash").sub(/You will receive an email upon completion. The new root password will be: /, '')
            ip_address = @browser 
              .get_text("xpath=/html/body/div[@id='container']/div[@id='main']/div[1]/div[@id='slice_action']/div[@id='show_slice']/table/tbody/tr[4]/td[2]") 
              .scan(/d{0,3}.d{0,3}.d{0,3}.d{0,3}/)
            assert !180.times{ break if (@browser.is_text_present("active") rescue false); sleep 1 }
            Net::SSH.start(ip_address[0].to_s, 'root', :password => root_password) do |ssh|
                ssh.exec("rm selenium_test_file.txt")
                ssh.exec("touch selenium_test_file.txt")
    
                stdout = ""
                ssh.exec!("ls -lah ~") do |channel, stream, data|
                  stdout << data if stream == :stdout
                end
                puts stdout
            end
            go_to_slice(@slice_name)
        ensure
            assert !180.times{ break if (@browser.is_text_present("active") rescue false); sleep 1 }
            delete_slice(@slice_name) 
        end
        logout
      end
    
      def test_should_be_able_to_delete_an_existing_slice
        login
        go_to_slice(@slice_name)
        delete_slice(@slice_name)
        logout
      end
    
    
      def login
        @browser.open "/login"
        assert_equal "Slicehost Login", browser.title
        @browser.type "email", "youemail@domain.com"
        @browser.type "password", "yourpassword"
        @browser.click "commit"
        browser_wait
      end
    
      def create_slice(slice_name)
        @browser.click "link=Add a Slice"
        browser_wait
        @browser.type "name", slice_name
        @browser.click "commit"
        browser_wait
      end
    
      def go_to_slice(slice_name)
        @browser.click "link=My Slices"
        browser_wait
        @browser.click "link=#{slice_name}"
        browser_wait
      end
    
      def delete_slice(slice_name)
        @browser.click "link=Delete"
        @browser.click "link=Delete #{slice_name}"
        assert /^Permanently delete this Slice and all of its data[sS] There is no turning back!$/ =~ @browser.get_confirmation
      end
    
      def logout
        @browser.click "link=Logout"
        browser_wait
      end
    
      def browser_wait
        @browser.wait_for_page_to_load "30000"
      end
    end
    

7\. Start the selenium server: 
    
    
    selsrvr

8\. run the test: 
    
    
    ruby ~/code/seleniumrc/test.rb

You should see the firefox browser open up in two windows and see the automation in process. Once the slice is created, I've setup a timer at 180 seconds (3 min) to wait for the slice to be created and set to a status of active. Like #5 above states, once complete the test captures the root password and ip address off the web UI and uses them to SSH into the new slice. This is my 3rd time using selenium and I like what I see. More to come.
