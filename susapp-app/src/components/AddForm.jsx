import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/AddForm.css';

class List extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: "",
      nomeDaMae: "",
      idade: 0,
      peso: 0,
      altura: 0,
      imc: 0,
      cpf: 0,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Link to='/'>Início</Link>
        <form>
          <label htmlFor="nomeDaMae">
            Nome da Mãe:
              <input onChange={this.handleChange} type="text" name="nomeDaMae" placeholder="Maria Luiza dos Santos" />
          </label>
          <label htmlFor="criança">
            Nome da Criança:
              <input onChange={this.handleChange} required type="text" name="criança" placeholder="Luiza dos Santos Pereira" />
          </label>
          <label htmlFor="genero">
            Sexo:
              <input onChange={this.handleChange} required type="radio" value="feminino" name="genero" />Feminino
              <input onChange={this.handleChange} required type="radio" value="masculino" name="genero" />Masculino
            </label>
          <label htmlFor="cor">
            Cor:
              <select onChange={this.handleChange} required name="cor">
              <option value="selecione">Selecione</option>
              <option value="branca">Branca</option>
              <option value="preta">Preta</option>
              <option value="parda">Parda</option>
              <option value="indigena">Indígena</option>
              <option value="amarela">Amarela</option>
            </select>
          </label>
          <label htmlFor="cpf">
            CPF/CNS:
              <input onChange={this.handleChange} required type="text" name="cpf" placeholder="123.456.789-00" />
          </label>
          <label htmlFor="nascimento">
            Data de nascimento:
              <input onChange={this.handleChange} required name="nascimento" placeholder="01/01/2001" />
          </label>
          <label htmlFor="peso">
            Peso (kg):
              <input onChange={this.handleChange} required type="number"
              name="peso" placeholder="Peso em kg" min="0" step=".1" />
          </label>
          <label htmlFor="altura">
            Altura (cm):
              <input onChange={this.handleChange} required type="number"
              name="altura" placeholder="altura em cm" min="0" step=".1" />
          </label>
          <button type="submit">Inserir Dados</button>
        </form>
      </div>
    );
  };
};

export default List;
