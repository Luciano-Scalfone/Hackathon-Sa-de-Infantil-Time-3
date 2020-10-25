import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AddForm } from '../components';

class newList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentListData: [],
      currentChild: {},
      listTitle: this.props.location.state.title,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddChild = this.handleAddChild.bind(this);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const currentChild = this.state.currentChild;
    currentChild[name] = value;

    this.setState({
      currentChild,
    });
  };

  async handleAddChild() {
    const { currentChild } = this.state;
    if (Object.keys(currentChild).length === 0) {
      console.log('currentChild vazio');
    } else {
      await this.setState((prevState) => {
        return {
          ...prevState,
          currentListData: [ ...prevState.currentListData, currentChild ],
          currentChild: {}, };
      });
    }
  }

  render() {
    const { currentListData } = this.state;
    const { handleChange, handleAddChild } = this;
    const currentList = (currentListData.length > 0)
      ? (
          <table>
            <th>Nome</th>
            <th>Nome da mãe</th>
            <th>Peso</th>
            <th>Altura</th>
            {
              currentListData.map((crianca) => {
                return (
                  <tr>
                    <td>{ crianca.nomeDaCrianca }</td>
                    <td>{ crianca.nomeDaMae }</td>
                    <td>{ crianca.peso }</td>
                    <td>{ crianca.altura }</td>
                  </tr>
                )}
              )}
          </table>
        )
      : <div>Adicione pessoas.</div>;
    return (
      <div>
        <h1>{ this.state.listTitle }</h1>
        <AddForm handleChange={ handleChange } handleAddChild={ handleAddChild } />
        <div>
          {currentList}
        </div>
        <Link to='/view-lists' className='links'>Ver Listas</Link>
      </div>
    );
  }
};

export default newList;
