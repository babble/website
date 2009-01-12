To setup your wiki using this template site : 

1) Replace our logo with your own (see appassets/images) if
you want to :)  Note that you'll also have to update 
appassets/css/site.css which references those images.

2) If you want confirmation email to work for user signup, 
you'll have to get a gmail account and provide the credentials
in an object in the mailinfo collection of your database.
See the note in _init.js

3) Ensure that you have an account for the site.  If you are 
running this on the hosted 10gen platform, an account is created
for you upon signup.  If you are running this on your own 
machine using the SDK, follow the instructions in the SDK 
as to how to create an admin account for a site.

4) Once the site is running, you should create the left-side
navigation for the site, which is dynamically generated from a 
wikipage called "navpane".  For example, if running locally
using the SDK, point your browser to 

  http://127.0.0.1:8080/navpane

and once on that page, hit "e" to enter wiki edit mode, 
and then enter the conten you wish to see as your left 
nave.  For example, you could put 

* [[ / | Home]]
* [[ /docs | Docs ]]

which would make a two-entry nav menu (test it and see).

For more information on the 10gen wiki markup language, 
please see

  http://www.10gen.com/wiki/wiki.markup


 

