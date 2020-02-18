# Phone Catalogue


React Redux Hooks Phones-catalogue exercise (Server created with Node)

**Clone the repo locally and then run docker**
```
npm i (./server)
npm i (./client)
docker-compose up
```
**Go to http://localhost:3000/ on web browser**

**navigate to ./client and then run tests**
```

npm test
```
**./client run without docker**
 ```
 npm start

 ```
 **./server run without docker**
 ```
 
 npm run dev

 ```

**Global .env**
```
API_HOST=http://localhost:3000
APP_SERVER_PORT=5000
REACT_APP_PORT=3000
```
** ./server .env**

```
PORT=5000
ENV=development

```
## Instructions

Your task is to write a very simple product catalogue app.

1. Write a simple REST API in whatever language you're most comfortable (NodeJS, Rails, Java...) that...
 - Has 1 endpoint `/phones`
 - Returns the attached "phones.json" payload (or a free version of it)
 - The data can all be mocked, no need for a persistence layer
2. Write a React app that displays the phones from the API
- Use redux for state management and Axios (or similar library) for fetching data from the API
- Display an initial list with all phones
- When a phone model is selected from the list, it will render a phone detail view displaying a few more details about that phone
- Display a spinner or placeholder component while the API request is ongoing
- Make it look decent. No need for super sophisticated design, but at a minimum, make it somewhat responsive so that it doesn’t look terrible on a mobile phone. Add images for each device.
3. Push the code to a public github repo with a README.md that explains how to run API & Frontend app

## Bonus points
1. Dockerize the app.
2. Write realistic unit/end-to-end tests.
