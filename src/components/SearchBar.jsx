import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return <input onChange={e => console.log(e.target.value)} />;
  }
  /*
  onInputChange(event) {
    console.log(event.target.value);
  }
  */
}