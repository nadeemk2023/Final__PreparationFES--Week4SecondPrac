# Starting Pseudocode

1. We are already given the styling and basic HTML structure of what we need to build we just need to dynamically fetch and receive the response along with rendering the user and the user's posts in a second page `user.html`

---

# 2 - Ask Questions

```
   index.html
```

- What is required for `index.html` to function correctly for our end goal since we have no directions we need to formulate our questions to navigate building our directions and game plan
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
-
