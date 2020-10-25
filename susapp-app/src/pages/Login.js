import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Home from './Home';

class Login extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

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

  render() {
    const { login, senha } = this.state;
    const { handleClick } = this.props;

    return (
      <div className="App">
        <label htmlFor="login">
          Nome de Usuário:
              <input required name="login" placeholder="Fulano de Tal" onChange={this.handleChange} />
        </label>
        <label htmlFor="senha">
          Senha:
              <input required name="senha" placeholder="senha" onChange={this.handleChange} />
        </label>
        <input type="button" value="Criar Lista" onClick={() => handleClick(login, senha)} />
      </div>
    );
  }
}

export default Login;
