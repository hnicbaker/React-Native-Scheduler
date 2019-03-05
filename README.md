# Project 4 Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 -26th| Project Description, Wireframes / Priority Matrix / Functional Components | Complete
|Day 2 -27th| Core Application Structure / Components / Database| Complete
|Day 3 -28th| Code Day | Complete
|Day 4 -1st| Code Day | Complete
|Day 5 -2nd| MVP | Complete
|Day 6 -3rd| Post MVP Coding | Complete
|Day 7 -4th| Post MVP Coding | Complete
|Day 8 -5th| Post MVP Coding | Complete
|Day 9 -6th| Present | Incomplete


## Project Description

Project is a personal agenda application that allows the user to add events and appointments to multiple calendars based on category. The user will be able to create new events, as well as edit, delete, and add notes to exsisting ones. Calendars will be saved to a users account and secured with a password. 

## Project Stack:

- React Native
- Postgres
- Sequelize


## Wireframes

https://res.cloudinary.com/dscmlq0xm/image/upload/v1551196249/LogIn_Register.png

https://res.cloudinary.com/dscmlq0xm/image/upload/v1551196249/Calendar_Select.png

https://res.cloudinary.com/dscmlq0xm/image/upload/v1551196249/Day_Month.png

## Priority Matrix

https://res.cloudinary.com/dscmlq0xm/image/upload/v1551199261/PM.heic  

#### MVP 

- Render Log in / Sign up Pages 
- Render Calendar / Events Pages
- Set Up Database
- Edit, Create, Delete events
- Set up navigation 


#### PostMVP 

- User Auth 
- Styling 
- Appointment / Event Reminders
- Detecting timezone based on location 
- Pulling Holidays from external API 

## Architectural Design

https://res.cloudinary.com/dscmlq0xm/image/upload/v1551202027/CH.heic

## ERD

https://res.cloudinary.com/dscmlq0xm/image/upload/v1551196238/ERD1.png

## UI Components 

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include Logo | 
| Footer | This will render the header include the nav | 
| Choose Calendar Page | This will render all available calendars| 
| Calendar Page | This will render individual calendar on the page, with the current day highlighted | 
| Day Detail Page | This will render all events in the selected day | 
| Profile Page | For MVP, this will render whether or not the user is logged in| 
| Add User Page | This will render a page to create a user account | 
| Log In Page | This will render a page to log in with an existing account| 


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Header | H | 2hr| TBD |
| Footer  | H | 2hr| TBD |
| Choose Calendar Page | H | 4hrs| TBD |
| Calendar Page | H | 6hrs| TBD |
| Day Detail Page | H | 4hrs| TBD |
| Profile Page  | H | 2hrs| TBD |
| Add User Page| H | 4hrs| TBD |
| Log In Page| H | 4hrs| TBD|
| Total | H | 28hrs| TBD | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
