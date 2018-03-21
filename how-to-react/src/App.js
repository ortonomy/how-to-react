// library dependencies
import React, { Component } from 'react';
import Axios from 'axios';

// component dependencies
import Table from './components/Table';
import TableRow from './components/TableRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      imageUrl: null
    }
  }

  componentDidMount() {
    Axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6f2b8b61c03afbeccc25962cf9ed8f5b&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018')
    .then ( res => {
      this.setState({ movies: res.data.results })
    })
    .then ( () => {
      Axios.get('https://api.themoviedb.org/3/configuration?api_key=6f2b8b61c03afbeccc25962cf9ed8f5b')
      .then ( res => {
        this.setState({imageUrl: res.data.images.base_url + res.data.images.poster_sizes[0], loading: false }) 
      })
    })
    .catch ( err => ( console.log(err.message) ));
  }

  render() {
    const { movies, loading, imageUrl } = this.state;
    if ( !loading ) {
      return (
        <Table>
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
      );
    }
    return (
      <div>LOADING</div>
    )
  }
}

export default App;
