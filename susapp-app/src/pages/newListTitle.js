import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class newListTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const title = document.getElementById('title-input').value;
    if (title) this.setState({ title });
  }

  render() {
    if (this.state.title) {
      return <Redirect to={{
        pathname: "/new-list",
        state: { title: this.state.title },
      }} />;
    }

    return (
      <form>
        <label htmlFor="listTitle">
          Escreva um nome para sua lista
        </label>
        <input type="text" name="listTitle"
        id="title-input"
        placeholder="Escreva um título" />
        <button type="button" onClick={ this.handleClick }>Criar</button>
      </form>
    );
  }
};

export default newListTitle;
