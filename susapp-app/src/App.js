import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home, Relatorios, viewLists, newList } from './pages';
import Login from './pages/Login';

class App extends Component {
  constructor() {
    super();

    this.state = {
      verification: false,
    };
  };

  componentDidMount() {
    this.setState({verification: false}, () => {
      const verification = localStorage.getItem('verification');

      this.setState({
        verification: verification === undefined ? false : verification,
      });
    });
  };

  render() {
    const { verification } = this.state;

    if(!verification) {
      return (
        <BrowserRouter>
           <Login />
        </BrowserRouter>
      )
    }
    else {
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/relatorios' component={Relatorios} />
              <Route path='/view-lists' component={viewLists} />
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
