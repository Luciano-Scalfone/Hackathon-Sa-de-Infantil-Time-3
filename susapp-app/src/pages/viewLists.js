import React, { Component } from 'react';
import { RenderLists } from '../components';
import { Link } from 'react-router-dom';

class viewLists extends Component {
  render() {
    return (
      <div>
        <RenderLists />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
};

export default viewLists;
