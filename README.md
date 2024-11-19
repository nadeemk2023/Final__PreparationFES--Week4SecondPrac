# Starting Pseudocode

1. We are already given the styling and basic HTML structure of what we need to build we just need to dynamically fetch and receive the response along with rendering the user and the user's posts in a second page `user.html`

---

# 2 - Ask Questions

```
   index.js
```

- What is required for `index.js` to function correctly for our end goal since we have no directions we need to formulate our questions to navigate building our directions and game plan
- Which element will we select to change the **inner html** of once we receive a response from our fetch request
- What is the API we will be fetching from and what is requred in order for this fetch method to work correctly?
- How do we unlock a promise? And how would we convert a response into something we can use in a function to help us render to our page?
- What is the structure and `key:pair` values of the `user` objects
- What method will we use to convert the array of `user` objects into an `html` structure for each user?
- How will we navigate the user on click of a user card to `user.html` from `index.html`

---

```
user.html
```

- How can we navigate the user to this page from index.html
- How do we render the correct posts to the page from the user that our website user clicked on?
- Where will we get the ID of the selected user once we have successfully navigated the user to `user.html`?
- What is `window.location` and how can we use this to navigate the user? What does this object look like
- How can we create something in `local storage` and use it within a function for when the user clicks on the user card rendered to the page to display the posts of a specific user?
- How do we gain access of something we have created in `local storage`?
- How do we dynamically render the page according to the posts of a selected user?
- How can we update our input method to numbers that can be toggled up and down like in the mockup?

# 3 - Get answers to your questions

```
index.html
```

- For our `index.html` to property function we need:
  - To fetch all the users from the API `"https://jsonplaceholder.typicode.com/users"`, convert the response using `.json()`
  - Update the innerHTML that will house all of the users in this case `user-list`, by selecting it within the DOM tree with javascript and using javascript to dynamically render all of the User's information
    - `User's name`
    - `User's Email`
    - `User's Phone Number`
    - `User's Website`
- We unlock a response from the `fetch` method by using either an `async function with the keyword await` or using a `fetch/then` strategy
  - In both cases we will receive the users in a promise form that will need to be unlocked further with the `json()` method to `UsersData`
- We will need to employ a `map` method over this array user objects to dynmically convert the data matching the starter HTML structure we were given
  - Then we render this to the DOM tree
- To navigate the user to `user.html` from their current `index.html` we will need to use the `window.location.origin` and update the suffix at the end to `user.html`
- Each card will also need to have an `eventListener` that will house a function that will create a `key:pair` value in `local storage` in the form of `userId:id` which will utilize the `event.target.value` to receive the `id` we will pass in as the value in this key pair

```
user.html
```

- We can navigate the user from their current page to `user.html` by using the `window` object which has a `location` object within it and within that `window.location` there is a `href` property which has the value of the current href that the user is on.
  - But there is also a `window.location.origin` we will use this as the prefix and then add with a template string the `user.html` portion of the new href we want to navigate the user to
- To render the correct posts for the selected user we will need to fetch from this API: `"https://jsonplaceholder.typicode.com/posts?userId=:id"`
  - Here we will need to change the `:id` portion of the href to the selected user to receive a response with that specific user's posts after unlocking both the response and the json conversion promise.
- We will achieve the above goal by adding an `eventListener` to each `user-card` within the `user-list` and then pass in the `userId` from `event.target.value`
  - we will then store this in `local storage` with a key pair value in this case `userId:id` where the `id` is the value being passed in from our event listener
  - This will allow the selected user's id to persist and be accessible through local storage
    - From here we will dynamically get a response from the API above to get the user's posts
  - Then we will render the specific user's posts to the page for our website visitor using the starter html code in `user.html`
- We will update the `input` type from `text` to `number` to allow a toggle on the side of input entry box with arrows to increment or decrement the id number
  - We will use this number to update the value within `local storage` to update the rendered posts to the page for our website visitor

---

# 4 - Make a plan

```
index.js
```

- Create a renderUsers function that will:

  - ~~Fetch users from the API~~
  - ~~unlock that response with an async/await function~~
  - ~~Use `json()` to convert that response into data we can use of the users~~
  - ~~We will then feed these users into our function below that creates the HTML structure for each user and render dynamically to the page with the user's:~~
    - ~~`User's name`~~
    - ~~`User's Email`~~
    - ~~`User's Phone Number`~~
    - ~~`User's Website`~~
  - ~~We will then assigned the newly created html structure to the innerHtml of `user-list`~~

- ~~Create a function userHTML that will:~~
  - ~~Take the user's information which will be an user object
    create a user-card for each user in the array using `map`~~
  - ~~This function will have a parameter of a `user` passed to it as well from renderUsers~~
  - ~~This will be fed into our renderUsers function that will update the innerhtml of `user-list` to reflect all users after the array of users has been mapped over~~
- ~~Add an `eventListener` to each user-card that will trigger a function to create key pair value in `local storage` that persist's the selected user's id for use with `user.html` and `user.js` later~~
  - ~~This event listener needs to pass the `user.id` as the value for the key pair in local storage~~
- ~~We will also use this function to navigate the user from `index.html` to `user.html` with `window.location.origin` in the string value for the href used to update the url on navigation~~

```
user.js & user.html
```

_Most of what will be listed below will be applicable for primarily user.js_

- ~~We will need to capture the selected userId in a global variable from local storage~~
- ~~We will use this id to dynamically receive a response for the selected user from this API: `"https://jsonplaceholder.typicode.com/posts?userId=:id"`~~
  - ~~This will be in a getUserPosts function which will have a parameter for the userID which will either be passed in as an argument or retrieved from local storage~~
- ~~We will need another function for postsHTML that will convert over the posts passed in to HTML to render to the page updating the `post-list`.innerHTML~~
- ~~Update the input type to number to match our mockup goals of being able to decrement/increment the selected user ID~~
- Create a function that will trigger `onChange` of the input field to update the `userId` in local storage and invoke updating the rendered posts to the page to the selected user id
