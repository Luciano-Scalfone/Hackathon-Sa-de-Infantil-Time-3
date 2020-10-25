import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      login: '',
      senha: '',
      redirect: false,
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
      this.setState({redirect: false}, () => {
        localStorage.setItem('verification', true);
        this.setState({
          redirect: true,
        });
      }) :
      localStorage.setItem('verification', false);
      alert('Nome de usuário ou senha inválidos');
  };

  render() {
    if(this.state.redirect) {
      return <Redirect to="/" />
    }
    else {
      return (
        <div className="App">
          <label htmlFor="login">
            Nome de Usuário:
              <input required name="login" placeHolder="Fulano de Tal" onChange={this.handleChange} />
          </label>
          <label htmlFor="senha">
            Senha:
              <input required name="senha" placeHolder="senha" onChange={this.handleChange} />
          </label>
          <input type="button" value="Criar Lista" onClick={this.handleClick} />
        </div>
      );
    }
  }
}

export default Login;
