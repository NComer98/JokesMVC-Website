# Jokes MVC Website Demonstration With Screenshots and Gif Below:

A project I designed to practice ASP.NET MVC Core and ReactJS. It uses Entity Framework to interface with Microsoft SQL Server. This website offers a database of jokes, which logged-in users can interact with (CREATE, READ, UPDATE, DELETE). 
<br /> <br />
This readme provides a tour of the website's functionality.

# Online Status
This website is currently <b>LIVE</b> on the internet. Hosted using Azure.
<br /> <br />
https://jokeswebappmvc20230901163106.azurewebsites.net/

# Dynamic Search
On the home page, the website uses <b>server-side ReactJS scripting</b> to populate the initial view of the database.
<br /> <br />
Then, the user can search the database either by the "jokeSetup" column or by the "jokeUsername" column. Typing either into the search bar will work. The table will <b>dynamically update</b> as the user types, courtesy of ReactJS.
<br />
<img src = "demo/Dynamic Search Functionality.gif" />
Demonstration of dynamic search functionality.
<br /> <br />
Searching can be done while logged-out. However, to alter the database in any way, the user must be logged-in.

# Log-in / Register + Authentication
Using the <i>IdentityUser</i> and <i>[Authenticate]</i> functionality provided by the ASP.NET MVC Core framework, access is restricted to the database. Clicking on CREATE,EDIT, or DELETE options will automatically take the user to the log-in page.
<br /> <br />
The log-in and register pages have form validation and security measures automatically provided by ASP.NET MVC Core framework. The default template has been slightly modified to allow for a username to be stored.
<img src = "demo/log-in.png" />
Log-in page
<img src = "demo/register with validation.png" />
Register page showing form validation
<br /> <br />
Once logged-in the navbar will display the user's username, and the user will be able to modify some aspects of the database.
<img src = "demo/logged-in home page.png" />
The current user's username is displayed at the top-right of the screen.

# User Database Modification
Users can create jokes.
<img src = "demo/joke create.png" />
Joke create form.
<br /> <br />
Users can view joke details, which is how they can see the punchline of jokes.
<img src = "demo/joke details.png" />
Joke details page.
<br /> <br />
Users can edit jokes, but ONLY if they created the joke that they're trying to edit.
<img src = "demo/joke edit invalid.png" />
Attempting to edit someone else's joke will not work.
<br /> <br />
Users can delete jokes, but ONLY if they created the joke that they're trying to delete.
<img src = "demo/joke delete.png" />
Joke delete form when the user made the joke.
<img src = "demo/joke delete invalid.png" />
Joke delete form when the user did NOT make the joke.
