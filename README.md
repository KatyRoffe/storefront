# StoreFront

By Katy Roffe
Deployment Link: coming soon

## Phase 1 Requirements

Today, we begin the first of a 4-Phase build of the storefront application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products
- As a user, I want to choose a category and see a list of all available products matching that category
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

## Phase 1 Notes

User Stories: 

- Create a visually appealing site using Material UI
- Use a Redux Store to manage the state of categories and items in the store
- Display a list of categories from state
- When the user selects (clicks on) a category …
- Identify that category as selected (change of class/display)
- Show a list of products associated with the category

- Categories
  - State should contain a list of categories as well as the active category
  - Each category should have a normalized name, display name, and a description
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched
- Products
  - State should be a list of all products
  - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger when the active category is changed
    - HINT: Multiple reducers can respond to the same actions
  - Create a reducer that will filter the products list based on the active category
- Active Category
  - State should store active category
- Other components (products, etc) might need to reference this

## Phase 2 Notes

Adding the following new user stories to meet the new requirements.

- As a user, I want to choose from products in the list and add them to my shopping cart
- As a user, I want to see the products that I’ve added to my shopping cart so that
- As a user, I want to change the quantity of items I intend to purchase in my shopping cart
- As a user, I want to be able to remove an item from my shopping cart

Application Flow:

- User sees a list of categories
  - Chooses a category and sees a list of products
  - Clicks the “Add to Cart” button on any product
  - Clicks the “Cart” link in the header
  - Sees a list of all products in the cart
  - Clicks the delete button on an item and sees the item removed
  - Changes the quantity selector on an item and sees the cart total change

- Continue to use Material UI Components for layout and styling
- Add a “Cart” indicator to the header, like this: Cart (0)
- Create a new Cart component to show the items in the user’s cart

## Phase 3 Notes

- As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock
- As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it

- Continue to use Material UI Components for layout and styling
- Load the category and product list from a remote API on page load.
- Update the product quantity in stock when adding items to (or removing from) the cart
- Continue to use multiple reducers

- You will need to use `useEffect()` to dispatch a load action on the initial page load
  - This will need to use `thunk` as it will be asynchronous
- When adding/removing/updating items in the cart, the action/reducer will need to update the server
  - Perform the appropriate `post`, `put`, or `delete` action via API call (using thunk in an async action) on each of these actions as performed by the users

## UML

Coming as soon as I can figure out where I saved the image.....................