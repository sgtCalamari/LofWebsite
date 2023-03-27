# Löf Website
## Description
React website and Node.JS API/server to handle requests for bread.

## Routes
### [GET] Home Page (/)
Landing page for uesrs to view available options and navigate to order form.
### [GET] Order (/order)
Order form with options and means for user to submit a new order.
### [POST] Submit Order (/order/submit)
Sends data with order information to be added to database and/or kick off calendar item creation.
### [GET] Order Success (/order/success)
Show the user that the order was submitted properly and provide links to navigate back to home page.
