# news-scraper
Web app that lets users view and leave comments on the latest news; using Mongoose and Cheerio to scrape news from another site. This app essentially scrapes a site with Cheerio, stores the site's data with MongoDB, and performs CRUD operations on the data using the Mongoose ORM.

# Deployment
* GitHub
* Heroku

# Technologies Used
* Node.js
* MongoDB
* Mongoose
* body-parser
* Express.js
* express-handlebars
* cheerio
* axios


Before You Begin
In order to deploy your project to Heroku, you must set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively. Follow these steps to get it running:

Create a Heroku app in your project directory.
Run this command in your Terminal/Bash window:
heroku addons:create mongolab
This command will add the free mLab provision to your project.

When you go to connect your mongo database to mongoose, do so the following way:

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

This code should connect mongoose to your remote mongolab database if deployed, but otherwise will connect to the local mongoHeadlines database on your computer.


# Overview of App
A web-scraper app that accomplishes the following:
* Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:
* Headline - the title of the article
* URL - the url to the original article
* Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.


Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; Do not save any duplicate entries.

Don't just clear out your database and populate it with scraped articles whenever a user accesses your site.

If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.

Helpful Links

MongoDB Documentation
Mongoose Documentation
Cheerio Documentation

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.