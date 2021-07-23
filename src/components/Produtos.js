import React from "react";
import { ItemProduto } from "./ItemProduto";
import styled from "styled-components";

//Estilização aplicado aos cards relacionados aos produtos.
const ConteudoDeProdutoPai = styled.div`
  img {
    width: 100%;
    height: 200px;
    border-radius: 30px;
    opacity: 0.9;
    :hover {
      transform: scale(1.3);
      transition-duration: 1s;
      z-index: 1;
    }
  }
`;

//Estilização aplicada para a região que mostra a quantidade de produtos e trecho da ordenação.
const TopoDeProduto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  select {
    border: none;
    border-radius: 20px;
    background-color: transparent;
    cursor: pointer;
    color: aquamarine;
    font-weight: bold;
    option {
      font-weight: bold;
      border: none;
      background-color: blueviolet;
    }
  }
`;

//Estilização para mostrar os cards dos produtos, estabelecido como criação em grid.
const GridDeProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
`;

export class Produtos extends React.Component {
  state = {
    sort: "DECRESCENTE"
  };

  //Função para Obtenção de Lista de produtos filtrados e ordenar os mesmos com base no parâmetro desejado pelo usuário.
  obterReordenacaoDeListaFiltrada = () => {
    return (
      this.props.produtos
        .filter((elemento) =>
          this.props.valorMaximoDoFiltro
            ? elemento.preco <= this.props.valorMaximoDoFiltro
            : true
        )
        .filter((elemento) =>
          this.props.valorMinimoDoFiltro
            ? elemento.preco >= this.props.valorMinimoDoFiltro
            : true
        )
        .filter((elemento) =>
          this.props.nomeFiltrado
            ? elemento.descricao.includes(this.props.nomeFiltrado.toUpperCase())
            : true
        )
        //(a,b): Padrão para ordenação, encontrado no MDN como uma função específica para o método sort quando se deseja ordenar caracteres
        .sort((a, b) =>
          this.state.sort === "CRESCENTE"
            ? a.preco - b.preco
            : b.preco - a.preco
        )
    );
  };

  onChangeOrdenacao = (event) => {
    this.setState({ sort: event.target.value });
  };

  render() {
    const ReordenacaoDeListaFiltrada = this.obterReordenacaoDeListaFiltrada();
    return (
      <ConteudoDeProdutoPai>
        <TopoDeProduto>
          <p>Quantidade de produtos: {ReordenacaoDeListaFiltrada.length}</p>
          <label>
            Ordenação:
            <select value={this.state.sort} onChange={this.onChangeOrdenacao}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
          </label>
        </TopoDeProduto>
        <GridDeProdutos>
          {ReordenacaoDeListaFiltrada.map((elemento) => {
            return (
              <ItemProduto
                elemento={elemento}
                AdicionarProdutoNoCarrinho={
                  this.props.AdicionarProdutoNoCarrinho
                }
              />
            );
          })}
        </GridDeProdutos>
      </ConteudoDeProdutoPai>
    );
  }
}
