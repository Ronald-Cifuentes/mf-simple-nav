# What is this app?

This application contains a Header component that reflects and resets the counter as if it were a shopping cart.

<img width="1193" alt="image" src="https://user-images.githubusercontent.com/59535805/213973751-1c4498c5-06fe-48bc-87c3-daba272a4731.png">


# Deployed in vercel:

if you want to see this application running, please click on the following links

- [Nav](https://mf-simple-nav.vercel.app/)

# How to use this app?

## Installation

this application was build with:

```bash
NodeJs: v18.2.0
```

please use the package manager [yarn](https://yarnpkg.com/) to install the host.

```bash
$ yarn install
```

## Usage

#### Run this command

to run the app in a development environment

```bash
$ yarn start
```

this application was created with a host and nav

# How was this app created?

##### step 1:

create an application with module federation run this command

```bash
$ npx create-mf-app
```

```bash
    ? Pick the name of your app: simple-nav
    ? Project Type: Application
    ? Port number: 3001
    ? Framework: react
    ? Language: javascript
    ? CSS: Tailwind
```

##### step 2:

add this configuration in webpack.config.js file for ModuleFederationPlugin

```js
exposes: {
  './Header': './src/Header',
},
```

##### step 3:

create a component Header.jsx

```jsx
import React from 'react';

const Header = ({count = 0, onClear}) => {
  return (
    <header className="bg-black text-white flex font-bold p-5 text-3x1 items-center">
      <div className="flex-grow">Header</div>
      <i className="fa-solid fa-cart-shopping"></i>
      <div className="py-2 px-4">{count}</div>
      <button
        onClick={onClear}
        className="bg-indigo-800 font-bold text-white rounded py-2 px-4">
        Clear Cart
      </button>
    </header>
  );
};

export default Header;
```
