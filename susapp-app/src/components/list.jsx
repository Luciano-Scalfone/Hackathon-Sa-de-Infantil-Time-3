import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {};
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
      <form>
        <label htmlFor="responsavel">
          Nome da Mãe:
            <input onChange={this.handleChange} type="text" name="responsavel" placeholder="Maria Luiza dos Santos" />
        </label>
        <label htmlFor="criança">
          Nome da Criança:
            <input onChange={this.handleChange} required type="text" name="criança" placeholder="Luiza dos Santos Pereira" />
        </label>
        <label htmlFor="gender">
          Sexo:
            <input onChange={this.handleChange} required type="radio" value="feminino" name="gender" />Feminino
            <input onChange={this.handleChange} required type="radio" value="masculino" name="gender" />Masculino
          </label>
        <label htmlFor="raca">
          Raça:
            <select onChange={this.handleChange} required name="raca">
            <option value="selecione">Selecione</option>
            <option value="branca">Branca</option>
            <option value="preta">Preta</option>
            <option value="parda">Parda</option>
            <option value="indigena">Indígena</option>
            <option value="amarela">Amarela</option>
          </select>
        </label>
        <label htmlFor="identificacao">
          CPF/CNS:
            <input onChange={this.handleChange} required type="text" name="identificacao" placeholder="123.456.789-00" />
        </label>
        <label htmlFor="nascimento">
          Data de nascimento:
            <input onChange={this.handleChange} required name="nascimento" placeholder="01/01/2001" />
        </label>
        <label htmlFor="peso">
          Peso (kg):
            <input onChange={this.handleChange} required type="text" name="peso" placeholder="20" />
        </label>
        <label htmlFor="altura">
          Altura (cm):
            <input onChange={this.handleChange} required type="number" name="altura" placeholder="150" />
        </label>
        <button type="submit">Inserir Dados</button>
      </form>
    );
  };
};

export default List;
