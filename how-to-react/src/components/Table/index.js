import React, { Component } from 'react';

class Table extends Component {
  render () {
    return (
      <table className="table table-hover">
        <caption>Most popular movies of 2018</caption>
          <thead>
            <tr>
              <th>Poster</th>
              <th>Title</th>
              <th>Overview</th>
              <th>Language</th>
              <th>Release date</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            { this.props.children }
          </tbody>
      </table>
    )
  }
}

export default Table;