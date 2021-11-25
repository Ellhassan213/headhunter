Headhunter Backend
-----

A basic Express Server is currently setup to integrate with SQL database locally and on heroku via ClearDB to serve the react application. Deployed API can be found here: [HeadhunterAPI](https://headhunter-deploy.herokuapp.com/). Please navigate through the routes in `index.js` to see server responses.

### Project Structure

| Folder or File | Description |
| -------------- | ----------- |
| `index.js` | Entry File. Here, we set up middleware and initialise express and SQL database. For now, we also set up routes and controllers that listens to client (React App) here, subsequently working with the database to fetch, add, update and delete information|
| `config/db.js` | Database configuration |