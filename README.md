This project was bootstrapped with [Create React App].

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Methology of the project`

In this project, i have used a methology called `Atomic design` where we devide our pages into components
and seperate the login (ir the redux part) from the components (front part), therefor we can reuse them in other projects.
This kind of architecture might be to much for this project but i wanted to do it more proffesionally and it can work on much complicated projects.

### `Description of the project`

The following paragraph, we will describe the main parts of our project :

`components` : this folder contains the mains component that we have used to created our pages for example we have : button, typography : both used to build a Home component.<br />
`container` : this folder contains the redux part of the components, when we need to execute an action of simply get our data from the API.<br />
the container contains 5 main files :<br /> - `action` : where we define our action for the store<br /> - `index` : it's the entry point and the connection with the other pages <br /> - `container` : where we define the mapStateToProp and mapDispatchToProps <br /> - `reducer` : where define our reducer <br /> - `selector` : hadles the state and compute the result state combining the defaul state and our current state<br />
`pages` : this folder is where we regroupt our components to build pages<br />
`app.tsx` : here we defined our routes and apply them to the pages we have created.<br />
`index.tsx` : here is our root folder where i connected our store redux as well as the theme created for the mini website.<br />
`theme.ts`: here i defined the colors that i'll use in the styling of our components<br />
`utils` : here i have defined two files one is just to define the routes that we used and the other to combine the reducer of our store .<br />

### `Use of typescript`

In this platform i have used typescript.

### `Steps to work with project`

`step 1`: Signup using any information and get message of confirmation with a dispatch of the data
`step 2` : Enter `za@gmail.com` as email and `123` as password to get logged and get the acces to post for a job
`step 3` : post for a job
`step 4` : check profile to see the posted jobs
`step 5` log out
