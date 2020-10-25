import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/relatorios' className='links'>Relatórios</Link>
        <Link to='/view-lists' className='links'>Ver Listas</Link>
        <Link to='/new-list-title' className='links'>Nova Lista</Link>
      </div>
    );
  }
};

export default Home;
