import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AddForm } from '../components';

class newList extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handleAddChild() {
    const { currentChild, listTitle } = this.state;
    let validity;

    if (Object.keys(currentChild).length === 0) {
      console.log('currentChild vazio');
    } else {
      const form = document.querySelectorAll('input');
      validity = Array.from(form).every(element => element.checkValidity());
    }

    const imc = Math.round(currentChild.peso / ((currentChild.altura/100)**2) * 100) / 100;
    let signal;
    
    switch (true) {
      case (imc < 18.5):
        signal = 0;
        break;
      case (imc < 24.9):
        signal = 1;
        break;
      case (imc < 29.9):
        signal = 2;
        break;
      case (imc < 39.9):
        signal = 3;
        break;
      case (imc >= 39.9):
        signal = 4;
        break;
      default:
        break;
    };

    if (validity) {
      const data = JSON.parse(localStorage.getItem('data'));
      const child = {...currentChild, imc, signal,}
      
      data[listTitle].dados.push(child);
      localStorage.setItem('data', JSON.stringify(data));
      
      this.setState({
        currentChild: {},
      });
    }
  };

  render() {
    const { listTitle } = this.state;
    const { [listTitle]: { dados } } = JSON.parse(localStorage.getItem('data'));
    const { handleChange, handleAddChild } = this;
    const currentList = (dados.length > 0)
      ? (
        <table>
          <th>Nome</th>
          <th>Nome da mãe</th>
          <th>Peso</th>
          <th>Altura</th>
          <th>IMC</th>
          {
            dados.map((crianca) => {
              return (
                <tr>
                  <td>{crianca.nomeDaCrianca}</td>
                  <td>{crianca.nomeDaMae}</td>
                  <td>{crianca.peso}</td>
                  <td>{crianca.altura}</td>
                  <td>{crianca.imc}</td>
                </tr>
              )
            }
            )}
        </table>
      )
      : <div>Adicione pessoas.</div>;
    return (
      <div>
        <h1>{this.state.listTitle}</h1>
        <AddForm handleChange={handleChange} handleAddChild={handleAddChild} />
        <div>
          {currentList}
        </div>
        <Link to='/view-lists' className='links'>Ver Listas</Link>
      </div>
    );
  }
};

export default newList;
