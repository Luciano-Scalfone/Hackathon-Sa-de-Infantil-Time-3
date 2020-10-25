import React, { Component } from 'react';
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom';
import List from '../components/list';

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>teste</h1>
        <Link to='/new-list'>List</Link>
      </BrowserRouter>
    );
  }
};

export default Home;
