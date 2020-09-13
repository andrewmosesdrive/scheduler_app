#Homework 5 Assignment
## Scheduler Application

For this assignment, I was tasked with creating a scheduler application utilizing HTML, Bootstrap, external CSS, Javascript (with an emphasis on jQuery and localStorage), and the Moment library while following this acceptance criteria:

- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with timeblocks for standard business hours
- WHEN I view the timeblocks for that day
- THEN each timeblock is color coded to indicate whether it is in the past, present, or future
- WHEN I click into a timeblock
- THEN I can enter an event
- WHEN I click the save button for that timeblock
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist

This assignment was completed with some initial starter code provided (though I rewrote a majority of it). I approached it by building out what I was most familiar with first, and moving onto the more challenging aspects toward the end (jQuery/Moment). This process seems to work best for me, not just in terms of productivity but also in terms of actual time spent working on a given assignment.

### Deployment link:
https://andrewmosesdrive.github.io/scheduler_app/

### Credits:
- Joey Jepson (@alligatormonday) assisted me with structuring and jQuery, which was immensely helpful.
- Jeremy Cantwell (tutor) helped me with moment and integrating it with jQuery.
- @florinpop17 for good examples
- w3schools and MDN for general resources

### Summary of methods/structuring
- Built out html utilizing bootstrap features, specifically jumbotron and table (table came from Bootswatch)
- Built out localStorage functionality 
- Integrate moment for time display and referencing
- Set up color-coding
- Additional styling with CSS

### Screenshots:
![](2020-09-12-21-29-03.png)
*note: mock time was used for screenshot to show color coding capabilities, actual color coding reflects current time vs block times.*