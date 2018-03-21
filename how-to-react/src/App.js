// library dependencies
import React, { Component } from 'react';

// component dependencies
import Table from './components/Table';
import TableRow from './components/TableRow';

// data
import Movies from './api/mock.js'

class App extends Component {
  render() {
    return (
      <Table>
        {
          Movies.map( el => {
            return (
              <TableRow  
                key={el.title}
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
      </Table>
    );
  }
}

export default App;
