.. title: Create Rails Application in Current Directory
.. link: http://blog.jasonmeridth.com/2012/10/24/your-filename.html 
.. description: 
.. date: 2012/10/25 00:00:00
.. slug: create-rails-application-in-current-directory 
.. type: text
.. tags: rails 

Yes, I know the common way to create a Rails application is

```bash
rails new 
```

and this will create a subfolder with your new Rails application called .

This post is because I keep forgetting how to create a new Rails application if I’m already in the subfolder.

If your folder name is the same name you plan to use for your application you can use the command below:

```bash
rails new .
```

Notice the period at the end telling it to use the current directory instead of creating a subdirectory.

If you want to supply a specific application name, you’ll have to do the following:

```bash
rails new  /path/to/folder/you/want/to/use
```

Example:

```bash
rails new fileuploader /var/www/apps/files
```
