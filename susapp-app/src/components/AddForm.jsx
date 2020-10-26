import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/AddForm.css';

class List extends Component {
  constructor(props) {
    super();

    this.handleCallBack = this.handleCallBack.bind(this);
  }

  handleCallBack(event) {
    // console.log(event.target.checkValidity());
    const { handleAddChild } = this.props;
    handleAddChild();
    document.getElementById("add_child").reset();
  }

  render() {
    const { handleChange } = this.props;
    const { handleCallBack } = this;
    return (
      <div>
        <Link to='/'>Início</Link>
        <form id="add_child">
          <label htmlFor="nomeDaCrianca">
            Nome da Criança
              <input onChange={handleChange} required type="text" name="nomeDaCrianca" placeholder="Luiza dos Santos Pereira" />
          </label>
          <label htmlFor="nomeDaMae">
            Nome da Mãe (opcional)
              <input onChange={handleChange} type="text" name="nomeDaMae" placeholder="Maria Luiza dos Santos" />
          </label>
          <label htmlFor="genero">
            Sexo
              <input onChange={handleChange} required type="radio" value="feminino" name="sexo" />Feminino
              <input onChange={handleChange} required type="radio" value="masculino" name="sexo" />Masculino
            </label>
          <label htmlFor="cor">
            Cor/Raça
              <select onChange={handleChange} required name="cor">
              <option value="selecione">Selecione</option>
              <option value="branca">Branca</option>
              <option value="preta">Preta</option>
              <option value="parda">Parda</option>
              <option value="indigena">Indígena</option>
              <option value="amarela">Amarela</option>
            </select>
          </label>
          <label htmlFor="cpf">
            CPF/CNS
              <input onChange={handleChange} required type="text" name="cpf" placeholder="123.456.789-00" />
          </label>
          <label htmlFor="idade">
            Idade
              <input onChange={handleChange} required type="number" name="idade" placeholder="10" />
          </label>
          <label htmlFor="peso">
            Peso (kg)
              <input onChange={handleChange} required type="number"
              name="peso" placeholder="Peso em kg" min="0" step=".1" />
          </label>
          <label htmlFor="altura">
            Altura (cm)
              <input onChange={handleChange} required type="number"
              name="altura" placeholder="altura em cm" min="0" step=".1" />
          </label>
          <button type="submit" onClick={ handleCallBack }>Inserir Dados</button>
        </form>
      </div>
    );
  };
};

export default List;
