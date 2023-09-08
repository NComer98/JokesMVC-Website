# Jokes MVC Website Demonstration With Screenshots and Gif Below:

This is a project I designed to practice ASP.NET MVC Core and ReactJS. It uses Entity Framework to interface with Microsoft SQL Server. This website offers a database of jokes, which logged-in users can interact with (CREATE, READ, UPDATE, DELETE). 
<br /> <br />
This readme provides a tour of the website's functionality.

# Online Status
This website is currently <b>LIVE</b> on the internet. Hosted using Azure. It's hosted on free servers though, so your initial launch of the page will take several seconds for the server to become active.
<br /> <br />
https://jokeswebappmvc20230901163106.azurewebsites.net/

# Dynamic Search
On the home page, the website uses <b>server-side ReactJS scripting</b> to populate the initial view of the database.
<br /> <br />
Then, the user can search the database both by the "jokeSetup" column and by the "jokeUsername" column. Typing either into the search bar will work. The table will <b>dynamically update</b> as the user types, courtesy of ReactJS.
<br />

<img src = "/demo/images/Dynamic Search Functionality.gif" /> <br />
Above image: GIF video demonstration of dynamic search functionality.
<br /> <br />
Searching can be done while logged-out. However, to alter the database in any way, the user must be logged-in.

# Log-in / Register + Authentication
Using the <i>IdentityUser</i> and <i>[Authenticate]</i> functionality provided by the ASP.NET MVC Core framework, access is restricted to the database. Clicking on CREATE,EDIT, or DELETE options will automatically take the user to the log-in page.
<br /> <br />
The log-in and register pages have form validation and security measures automatically provided by ASP.NET MVC Core framework. The default template has been slightly modified to allow for a username to be stored.
<br />
<img src = "/demo/images/log-in.png" /> <br />
Above image: Log-in page
<br />
<img src = "/demo/images/register with validation.png" /> <br />
Above image: Register page showing form validation
<br /> <br />
Once logged-in the navbar will display the user's username, and the user will be able to modify some aspects of the database.
<br /> <img src = "/demo/images/logged-in home page.png" /> <br />
Above image: The current user's username is displayed at the top-right of the screen.

# User Database Modification
Users can create jokes.
<br /><img src = "/demo/images/joke create.png" /> <br />
Above image: Joke create form.
<br /> <br />
Users can view joke details, which is how they can see the punchline of jokes.
<br /> <img src = "/demo/images/joke details.png" /> <br />
Above image: Joke details page.
<br /> <br />
Users can edit jokes, but ONLY if they created the joke that they're trying to edit.
<br /> <img src = "/demo/images/joke edit invalid.png" /> <br />
Above image: Attempting to edit someone else's joke will not work.
<br /> <br />
Users can delete jokes, but ONLY if they created the joke that they're trying to delete.
<br /> <img src = "/demo/images/joke delete.png" /> <br />
Above image: Joke delete form when the user made the joke.
<br /> <br />
<img src = "/demo/images/joke delete invalid.png" /> <br />
Above image: Joke delete form when the user did NOT make the joke.

# Interactive To-Do List
Using ReactJS and TypeScript, I implemented a simple interactive to-do list. It is not tied to user accounts.
<br /> <img src = "/demo/images/to-do-list.png" /> <br />
Above image: To-do list
<br /> <br />
Users can edit, delete, or mark tasks as completed. Tasks will automatically be displayed in either of the two lists based on their completion status.
<br /> <img src = "/demo/images/to-do-list editing.png" /> <br />
Above image: Editing a task
<br /> <br />
The display for the to-do list will dynamically change based on the user's screen-size for increased readability.
<br /> <img src = "/demo/images/to-do-list small screen.png" /> <br />
Above image: Small screen version of to-do list. Also note that the nav-bar links become collapsible via the top-right button if the screen is small enough.
<br /> <br />
