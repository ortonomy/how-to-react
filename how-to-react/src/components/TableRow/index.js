import React, { Component } from 'react';

class TableRow extends Component {
  render () {
    return (
      <tr>
        <td><img src={ this.props.posterPath } alt={ this.props.title } /></td>
        <td>{ this.props.title }</td>
        <td>{ this.props.overview }</td>
        <td>{ this.props.language }</td>
        <td>{ this.props.releaseDate }</td>
        <td>{ this.props.popularity }</td>
      </tr>
    )
  }
}

export default TableRow;