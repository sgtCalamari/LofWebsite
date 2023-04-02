# Löf Website
## Description
React website and Node.JS API/server to handle requests for bread.

## Layers
- client: front-end
- entities: object mappings
- factories: instance generators
- repositories: data access
- routes: endpoint mappings
- services: business logic (communication betw. routes and repositories layer)
- util: shared code
- handler: communication between routes and server

## Tests
- Integration tests: server-side E2E tests (not front-end)
- Unit tests: run without external connections (i.e. databases, external APIs, etc.)

## Routes
### [GET] Home Page (/)
Landing page for uesrs to view available options and navigate to order form.
### [GET] Order (/order)
Order form with options and means for user to submit a new order.
### [POST] Submit Order (/order/submit)
Sends data with order information to be added to database and/or kick off calendar item creation.
### [GET] Order Success (/order/success)
Show the user that the order was submitted properly and provide links to navigate back to home page.
