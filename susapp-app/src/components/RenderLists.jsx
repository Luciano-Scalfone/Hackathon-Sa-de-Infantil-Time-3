import React, { Component } from 'react';
import data from '../data/data';

class RenderLists extends Component {
  render() {
    return (
      <div>
        <h2>Listas salvas</h2>
        {Object.keys(data).map((list) => {
          console.log(list);
          return <p key="list.titulo">{data[list].titulo}</p>
        })}
      </div>
    );
  }
};

export default RenderLists;
