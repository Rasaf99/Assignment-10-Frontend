


&nbsp;

### Installation and Basic Setup

&nbsp;


>Install:

```shell
npx create-react-app my-app
```

&nbsp;
> Do the following:

- Remove `package.json.lock` file

- Go to `package.json` and remove all the testing related dependencies. Remove `web-vitals`. In the `scripts{}`, change `start` script to `dev`.

- From the `src` folder, remove `App.test.js`, `reportWebVitals`, `setupTests.js`, `logo.svg`, `App.css`

- In the `public` folder, just keep the `index.html` & remove all other files.

- Go to `index.js` file, and modify it by removing the lines which represent the removed packages and files.

- Go to the `App.js` file, and remove everything and paste the following:

```jsx
export default function App(){

  return (

    <>

      Hello World!
    
    </>

  )

}
```

- Change the `index.js` name to `index.jsx`. Also, change `App.js` to `App.jsx`


&nbsp;
> Run the following command:

```shell
yarn install
```
We are running it because we have deleted `package.json.lock` and now we need `yarn.lock`.


&nbsp;
> Install the following packages:

```shell
yarn add react-router-dom@6

yarn add @mui/material @emotion/react @emotion/styled

yarn add @mui/icons-material

yarn add @reduxjs/toolkit

yarn add react-redux

yarn add react-hook-form

yarn add react-helmet-async

yarn add framer-motion

yarn add date-fns

yarn add react-toastify
```



&nbsp;


### Absolute Import

&nbsp;

- Who wants to do relative import like this: `../../../Components/Dashboard/Profile`?
- I don't want. I want absolute import path. Like this: `Components/Dashboard/Profile`

- So, let's create `jsconfig.json` at the root of our project. Then paste the following code:



```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

- Don't add any comment in the `jsconfig.json` file as it is a `json` file.
  
- Remember, you have set `src` folder as the base folder. So, in any sub folders or sub files inside the `src` folder, you can use absolute path for importing something.

