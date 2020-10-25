import React, { Component } from 'react';
import data from '../data/data';

class RenderLists extends Component {
  render() {
    return (
      <div>
        <h2>Listas salvas</h2>
        {Object.keys(data).map((list) => {
          return <p key="list.titulo">{list}</p>
        })}
      </div>

    );
  }
};

export default RenderLists;
