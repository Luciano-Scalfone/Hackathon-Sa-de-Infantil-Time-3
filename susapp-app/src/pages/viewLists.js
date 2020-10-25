import React, { Component } from 'react';
import { RenderLists } from '../components';
import { Link } from 'react-router-dom';

class viewLists extends Component {
  render() {
    return (
      <div>
        <Link to="/">Início</Link>
        <RenderLists />
      </div>
    );
  }
};

export default viewLists;
