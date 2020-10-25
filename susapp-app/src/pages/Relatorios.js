import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Relatorios extends Component {
  render() {
    return (
      <div>
        <h1>Relatórios</h1>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
};

export default Relatorios;
