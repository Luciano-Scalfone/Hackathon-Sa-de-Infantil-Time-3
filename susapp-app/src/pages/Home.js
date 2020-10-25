import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/new-list'>Nova Lista</Link>
        <Link to='/see-list'>Ver Lista</Link>
      </div>
    );
  }
};

export default Home;
