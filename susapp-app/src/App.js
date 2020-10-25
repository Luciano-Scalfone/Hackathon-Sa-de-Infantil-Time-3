import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home, Relatorios, viewLists, newList } from './pages';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      login: '',
      senha: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { senha, login } = this.state;
    login === 'juFiuza' && senha === '123456' ?
      alert('Tudo certo') :
      alert('Nome de usuário ou senha inválidos');
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/relatorios' component={ Relatorios } />
            <Route path='/new-list' component={ newList } />
            <Route path='/view-lists' component={ viewLists } />
            <Route path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
        {/* <label htmlFor="login">
          Nome de Usuário:
            <input required name="login" placeHolder="Fulano de Tal" onChange={this.handleChange} />
        </label>
        <label htmlFor="senha">
          Senha:
            <input required name="senha" placeHolder="senha" onChange={this.handleChange} />
        </label>
        <input type="button" value="Criar Lista" onClick={this.handleClick} /> */}
      </div>
    );
  }
}

export default App;
