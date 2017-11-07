# Giphy-API
Giphy API that loads gifs on command


UCI Full Stack Web Development 24 week Boot Camp 9/25/17 to 4/7/18

Homework #6 - Assignment

Assigned: 11/4/17

Due: 11/11/17

This weeks lessons were learning how to access API's using AJAX and fetch.  We also dynamically created HTML using JS and jQuery, which was very useful to learn.


********************************************************************************************


GifTastic
Overview

In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.
GIPHY
Before You Begin

Hit the GIPHY API.
Fool around with the GIPHY API. Giphy API.
Be sure to read about these GIPHY parameters (hint, hint):
q
limit
rating
Like many APIs, GIPHY requires developers to use a key to access their API data. For now, you can use their public API key.
Make sure you switch the protocol in the query URL from http to https, or the app may not work properly when deployed to Github Pages.
Watch the demo video
You should have a high-level understanding of how this assignment works before attempting to code it.
Instructions

Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
We chose animals for our theme, but you can make a list to your own liking.
Your app should take the topics in this array and create buttons in your HTML.
Try using a loop that appends a button for each string in the array.
When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
Under every gif, display its rating (PG, G, so on).
This data is provided by the GIPHY API.
Only once you get images displaying with button presses should you move on to the next step.
Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
Deploy your assignment to Github Pages.
Rejoice! You just made something really cool.
Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.
One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.
Good Luck!
Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
