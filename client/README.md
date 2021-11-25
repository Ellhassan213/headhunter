# Headhunter Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

#### Development

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### Production

The site is deployed on Netlify at [Headhunter](https://gifted-varahamihira-210205.netlify.app/)

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

The project is also setup to use Github Actions to automously run test once the code base is pushed unto Github.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment). See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information on how the Application was deployed on Netlify.

### Project Structure

There are two special root folders in `src`: App and shared (as described in table below). All other root folders in src should follow the structure of the routes in Project Folder.

The main rule to follow: **Files from one module can only import from ancestor folders within the same module or from src/shared**. This makes the codebase easier to understand, working with code in one module, you should not introduce bugs in another module.

| Folder or File | Description |
| -------------- | ----------- |
| `public/index.html` | The HTML in the App where all scripts and styles are injected |
| `src/index.tsx`   | Entry File. This is where we render the App into the root DOM node |
| `src/App` | Application routes with global components always need to be mounted irrespective of routes. E.g. Header and Footer |
| `src/Project` | This is the project module where we can find domain specific code base such as the Venues, Artists, Decorators etc. |
| `src/shared` | Here we have components, constants and data, utils, hooks and some type models. These can be imported and used by any module |

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

