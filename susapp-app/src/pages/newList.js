import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AddForm } from '../components';

class newList extends Component {
  constructor(props) {
    super();

    this.state = {
      currentListData: [],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { currentListData } = this.state;
    return (
      <div>
        <AddForm callback={ this.handleChange } />
        <div>
          {currentListData.map((child) => <p>{child.nome}</p>)}
        </div>
        <Link to='/view-lists' className='links'>Ver Listas</Link>
      </div>
    );
  }
};

export default newList;
