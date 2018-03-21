# How to React (.js)

## Outline 

### Aim
In this workshop, we'll go through a quick how-to guide to building a foundational framework for a _real, useful, production standard_ front-end app with and then fill it with real data.


### Learning outcomes
- Be able to create your first ``react.js`` app.
- Be able to store you app state using ``redux`` and integrate into your react app using ``react-redux``
- Be able to 'hydrate', or fill, your app state store with data from an external source like an API

### Pre-requisites
You must have an understanding of javascript and programming concepts such as:
- first-class functions
- ES6 ( arrow functions, object rest spread operators, classes, ``import`` & ``export`` in ``node.js``, promises, and decorators)

You must have these pacakges installed on your computer (preferably from Homebrew with write access):

- ``node``
- ``npm``
- ``yarn`` 

(You can install with ``brew update && brew install node yarn``!)

## Content

### Part 1 -- A simple react app

Install ``create-react-app``, create an app, and run it:

- ``npm install -g create-react-app``
- ``mkdir ~/apps`` (change this to whatever you want)
- ``create-react-app [your-app-name]`` -- change ``[your-app-name]`` to whatever you want
- ``cd [your-app-name] && npm start``

![app](how-to-react/assets/images/app.png)

![firstrun](how-to-react/assets/images/first_run.png)

![files](how-to-react/assets/images/files.png)


### Part 2 -- dumb components with static data

Now we'll create our app structure and fill it with our static data

- create a folder ``components`` inside ``src`` and 2 folders inside ``Table`` and ``TableRow``
- create ``index.js`` files inside each one and create a basic react component inside

```
// library dependencies
import React, { Component } from 'react';

// component
class Table extends Component {
  render () {
    return null
  }
}

// module export
export default Table

```

- create a folder inside ``src`` called ``api``
- create a file called ``mock.js``. You can find the mock data on branch ``dumb-app`` in the ``src/api/`` folder

```
const Movies = [
  {
    poster_path: null,
    title: 'Black Panther',
    overview: 'After the events of Captain America: Civil War, King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war. ',
    language: 'en',
    release_date: '2018-02-13',
    popularity: 327.127873
  },
  ...
];

export Movies;
```

#### Building up ``app.js``

- ``import Table from './components/Table'`` 
- Remove boilerplat code from ``render`` in app.js and render a ``<Table></Table>``
- remove ``null`` and add below to return statement in the render function for ``Table`` component:

```
(
  <table className="table table-hover">
    <caption>Most popular movies of 2018</caption>
      <thead>
        <trow>
          <th>Poster</th>
          <th>Title</th>
          <th>Overview</th>
          <th>Language</th>
          <th>Release date</th>
          <th>Popularity</th>
        </trow>
      </thead>
      <tbody>
        { props.children }
      </tbody>
  </table>
)
```

- ``import TableRow from './components/TableRow'``
- ``import Movies from './api/mock.js'``
- inside ``<Table>``:

```
{ Movies.map( el => { 
    return (
      <TableRow  
        posterPath={el.poster_path}
        title={el.title}
        overview={el.overview}
        language={el.language}
        releaseDate={el.release_date}
        popularity={el.popularity}
      />
    )
  }) 
}
```

- replace null in render of ``<TableRow ... />`` with below:

```
return (
  <trow>
    <td><img src={props.posterPath} ></td>
    <td>props.title</td>
    <td>props.overview</td>
    <td>props.language</td>
    <td>props.releaseDate</td>
    <td>props.popularity</td>
)
```










