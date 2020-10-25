import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AddForm, RenderLists } from '../components';

class newList extends Component {
  render() {
    return (
      <div>
        <AddForm />
        <RenderLists />
        <Link to='/view-lists' className='links'>Ver Listas</Link>
        <Link to='/' className='links'>Início</Link>
      </div>
    );
  }
};

export default newList;
