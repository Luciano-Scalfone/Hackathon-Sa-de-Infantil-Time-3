import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/relatorios' className='links'>Relatórios</Link>
        <Link to='/new-list' className='links'>Nova Lista</Link>
        <Link to='/view-lists' className='links'>Ver Listas</Link>
      </div>
    );
  }
};

export default Home;
