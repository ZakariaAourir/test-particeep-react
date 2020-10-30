This project was bootstrapped with [Create React App].

## Available Scripts

In the project directory, you can run:

### `npm install`

then...

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser...

### `Methology of the project`

In this project, i have used a methology called `Atomic design` where we devide our pages into components
and seperate the logic (the redux part) from the components (front part), therefor we can reuse these components them in other projects.
This kind of architecture might be to much for this project but i wanted to do it more professionally and it can work on much complicated projects, because it give a structure that is solid and flexible to add more interfaces in the furur.

### `Description of the project`

The following paragraph, we will describe the main parts of our project :

`components` : This folder contains the mains component that we have used to create our pages for example we have.<br />
`container` : This folder contains the redux part of the components, when we need to execute an action of simply get our data from the API.<br />
the container contains 5 main files :<br /> - `action` : Where we define our action for the store<br /> - `index` : It's the entry point and the connection with the other pages <br /> - `container` : Where we define the mapStateToProp and mapDispatchToProps <br /> - `reducer` : Where define our reducer <br /> - `selector` : Hadles the state and compute the result state combining the defaul state and our current state.<br />
`pages` : This folder is where we regroupt our components that we get from component folder or from container when we have dynamic components (components who uses source of data) to build pages. <br />
`app.tsx` : Here, we defined our routes and link them to the pages we have created.<br />
`index.tsx` : This is our root folder where i connected our store redux as well as the theme created for the mini website.<br />
`theme.ts`: Here, i defined the colors that i'll use in the styling of our components.<br />
`utils` : We have here two files one is just to define the routes("/" home) that we used and the other to combine the reducer of our store .<br />
