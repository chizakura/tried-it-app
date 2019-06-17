# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|6/17| Project Description | Complete
|6/17| Wireframes / Priority Matrix / Functional Components | Incomplete
|6/18| Core Application Structure (HTML, CSS, etc.) | Incomplete
|6/18| Pseudocode / actual code | Incomplete
|6/18| Initial Clickable Model | Incomplete
|6/19| MVP | Incomplete
|6/21| Present | Incomplete

## Project Description

**Tried It** is an application that allows the user to see reviews for places based on where their friends have visited. Often times individuals trust their friends' opinions more than anyone else's. This application will allow the user to add an account to the database as well as add reviews to different places. Additionally, the user may search for other friends in the database to see what places they tried and their review of it. Also, the user may search for a specific place and see which friends have "tried it" and see their reviews.

- [Tried It](Link to app here)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

[Tried It Wireframe](https://res.cloudinary.com/shakhan2019/image/upload/v1560730269/screen_shot_2019-06-16_at_5.20.55_pm_ecdchq.png)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.
- [Tried It Matrix](https://res.cloudinary.com/shakhan2019/image/upload/v1560729786/F051E608-4661-4E9B-862F-029B9F0D7E7B_1_t8qnxp.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  


#### MVP 

-Functioning application that allows the user to:
-Register an account (add an account to database) 
-Add reviews to places that they tried before
-Allows user to search database for either a place to check it’s reviews from users in database Or a specific user see their reviews for places —Or their TriedIts— 
-newsFeed component on the landing page that shows recent TriedIts added to database

#### PostMVP 

-Add User Login and dynamically relate created reviews to logged in user
-Add authorizations to update and delete reviews for only the author user
-Add ‘add friend’ functionality between users so that logged in user can only see TriedIts from their friends
-Add Likes and Comments functionality to Users and to Reviews!

## React Architectural Design

Define the the React components and the architectural design of your app.

#### [Tried It Architectural Design](https://res.cloudinary.com/chizakura/image/upload/v1560719179/Project%203/Tried_It_React_Architectural_Design.jpg)

## ERD

Create the ERD model for your project

#### [Tried It ERD](https://res.cloudinary.com/chizakura/image/upload/v1560719244/Project%203/Tried_It_ERD.png)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description |
| --- | --- |
| LandingPage | This will be the main page which includes the search bar and news feed |
| SearchBar | This will render the search bar that shows a list of places and users |
| NewsFeed | This will render a list of reviews with data taken from an API |
| ListOfUsers | This will render a list of users based on the place that was selected in the search |
| UserProfile | This will render a list of places based on the user that was selected in the search |
| ShowReview | This will render a specific user's review of a place they have been |
| CreateUser | This will render a form to create a new user |
| CreateReview | This will render a form to create a new review |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Landing Page showing News feed | H | 5hrs|  |
| Setting up a user to register an account | H | 3hrs|  |
| Adding Reviews | H | 2hrs|  |
| Adding Places | H | 2hrs|  |
| Being able to search the database | H | 2hrs|  |
| Adding a friend| H | 4hrs|  |
| Authorization | H | 6hrs|  |
| Styling | H | 4hrs|  |
| Total | H | 28 hrs| hrs |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

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

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.

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
| --- | --- |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
