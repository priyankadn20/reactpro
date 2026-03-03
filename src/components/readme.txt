// let's describe about react //

# React js
# what is react Js?
React JS is a JavaScript library used to build user interfaces (UI), especially for web applications

# what is UI?
A User Interface (UI) is the part of a website, app, or software that users see and interact with.
Example : Buttons,Menus,icon etc.

# what is JSX ?
It is a special syntax used in React that allows you to write HTML-like code inside JavaScript

# Why people should use React?
• Fast (virtual Dom)
• component based
• reusable code
• Easy to make Single Page Application
• Automaticly update the changes 

# React require some laguage 
• HTML
• CSS
• JavaScript

// let's know about how to use//

# how to use react?
• install node.js
• check terminal using "npm -v"
• create a react app "npm create vite@latest my-react-app" if you didn't create a folder in your desktop for react
• "cd my-react-app
   npm install
   npm run dev "
• Then you will get your local link 


# why there is a gitignore file?
• In a React project, the .gitignore file tells Git which files and folders should NOT be uploaded to GitHub.
• It prevents unnecessary or sensitive files from being tracked.

# why .prettierrc file ?
• for maintain code format

# why node_modules?
• node_modules exists because React app needs external packages to run, and npm stores them there.

# what is npm?
• npm stands for Node Package Manager.It helps developers install, manage, and update JavaScript packages (libraries).

# why Src folder inside the the react folder?
• It contains the main source code of React application.

# main.jsx?
• This is the first file React runs.It tells React where to render the app in the browser.

# App.jsx?
• This is the main component that contains  app’s UI structure.

# index.html?
• Even though React is a JavaScript library, it still needs an HTML file to attach itself to and display the app in the browser.

# package-lock.json?
• package-lock.json locks all package versions so app runs the same everywhere.

# package.json?
• package.json tells npm: what project needs, how to run it, and important info about project.

# vite.config.js?
• vite.config.js tells Vite exactly how to run and build React app

//Now learn react//
# Props
 • Simple Props

 • Destructring Props [we use direct variable & it's clean and easy]
    - Deafualt Destructring props [if parent take e value then output is parent's value but parent would'nt take value then function takes value which is default value]
    - nested Destructring Props
    - Rest Operator (...) in Destructuring

 • Multiple Props [multiple variable]

 • Passing Functions as Props

 • Default Props

 • Props are Read-only

 
# what is props?
• Props = “Properties”
• They are inputs to React components
• Props allow a parent component to pass data to a child component

# Why Props Are Important
• Make components dynamic - can change based on data
• Reuse the same component with different data
• Avoid hardcoding values inside components  [return <h1>Hello Piku!</h1>; // always Piku, cannot change]

# Array list Rendering - use map and li header 

# Array Object Rendering

# Array component Rendering

# What is state in react
state is a built-in object that stores a component’s dynamic data and determines its rendering.

# why we need state 
• Track data inside a component 
• Update the UI when data changes 
• Create dynamic interactions 

# State 2 types
 • Primitive 
      - Number,String,Boolean
      > String : 
      - string requair event,target,value
      - event : when something change in input these information carries on a one object 
      - target : where is change something is called target
      - value : when something write on the input

 • Array state
      - what is array state?
      - put on multiple value together inside an array
      > ADD Array state
      > REMOVE Array state
      > UPDATE Array state
 • Object state
      > ADD Object state
      > REMOVE Object state
      > UPDATE Object state
 • Boolean state
 • Drive state 
 • Functional Updates
 • Lazy Initial State
 • State with Form Input
 • State Array of Objects

 