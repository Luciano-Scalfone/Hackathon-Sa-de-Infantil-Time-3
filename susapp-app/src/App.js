import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home, Relatorios, viewLists, newList, newListTitle } from './pages';
import Login from './pages/Login';

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      verification: false,
    };
  };

  componentDidMount() {
    this.setState({ verification: false }, () => {
      const verification = localStorage.getItem('verification');

      this.setState({
        verification: verification === undefined ? false : verification,
      });
      console.log(this.state.verification);
    });
  };

  handleClick = (login, senha) => {
    console.log(login, senha);

    if(login === 'juFiuza' && senha === '123456') {
      this.setState({ verification: false }, () => {
        localStorage.setItem('verification', true);
        this.setState({
          verification: true,
        });
      })
    } else {
      localStorage.setItem('verification', false);
      alert('Nome de usuário ou senha inválidos');
    }
  };

  render() {
    const { verification } = this.state;

    if (!verification || verification === 'false') {
      return <Login handleClick={this.handleClick} />
    }
    else {
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/relatorios' component={Relatorios} />
              <Route path='/view-lists' component={viewLists} />
              <Route path='/new-list-title' component={newListTitle} />
              <Route path='/new-list' component={newList} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}

export default App;
