// library dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// component dependencies
import Table from './components/Table';
import TableRow from './components/TableRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    this.props.dispatch({
      type: 'GET_MOVIES'
    })
  }

  render() {
    const { loading, loaded, error, movies, imageUrl } = this.props.Data;
    if ( !loaded && !loading && !error ) {
      return (
        <button onClick={ this.loadData }>
        Click me to load some movies!
        </button>
      )
    } else if ( !loaded && loading && !error ) {
      return (
        <div>LOADING</div>
      )
    } else if ( !loaded && !loading && error ) {
      return (
          <div>ERROR! ERROR! ERROR!</div>
      )
    } else if ( loaded && !loading && !error ) {
      return (
        <Table >
          {
            movies.map( el => {
              return (
                <TableRow  
                  key={el.title}
                  posterPath={ imageUrl +  el.poster_path}
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
      )
    }
  }
}


export default connect(state => ({ Data: state.Data }), dispatch => ({ dispatch: dispatch }))(App);
