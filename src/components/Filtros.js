import React from "react";
import styled from "styled-components";

//Estilização padrão para todo o conteúdo
const ConteudoDeFiltro = styled.div`
  padding: 8px;
`;
//Estilização aplicada ao campo do label, sendo assim irá replicar ao seu "filho", input
const InputDeConteudoDeFiltro = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
  input {
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 3px solid aquamarine;
    background-color: transparent;
    :hover {
      background-color: none;
      border-bottom: 3px solid blue;
    }
    :active {
      border-bottom: 3px solid blue;
    }
  }
`;

export class Filtros extends React.Component {
  render() {
    return (
      <ConteudoDeFiltro>
        <InputDeConteudoDeFiltro>
          <input
            type="text"
            value={this.props.nomeFiltrado}
            onChange={this.props.onChangeNomeFiltrado}
            placeholder={"Filtrar Nome".toUpperCase()}
          />
        </InputDeConteudoDeFiltro>
        <InputDeConteudoDeFiltro>
          <input
            type="number"
            value={this.props.valorMinimoDoFiltro}
            onChange={this.props.onChangValorMinimoDoFiltro}
            placeholder={"Valor min".toUpperCase()}
          />
        </InputDeConteudoDeFiltro>
        <InputDeConteudoDeFiltro>
          <input
            type="number"
            value={this.props.valorMaximoDoFiltro}
            onChange={this.props.onChangeMaximoDoFiltro}
            placeholder={"Valor max".toUpperCase()}
          />
        </InputDeConteudoDeFiltro>
      </ConteudoDeFiltro>
    );
  }
}
