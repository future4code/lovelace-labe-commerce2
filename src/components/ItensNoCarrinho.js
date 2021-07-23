import React from "react";
import styled from "styled-components";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

//Estilização aplicada para o "main" dos conteúdos, além dos botões criados.
const Conteudo = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  button {
    font-size: 0.3em;
    width: 10px;
    height: 10px;
    background: transparent;
    border: none;
    color: transparent;
    :hover {
      cursor: pointer;
      background: transparent;
    }
  }
`;

export class ItensNoCarrinho extends React.Component {
  render() {
    return (
      <Conteudo>
        <p>{this.props.itemNoCarrinho.quantidade}x</p>
        <p>{this.props.itemNoCarrinho.descricao}</p>
        <button
          onClick={() =>
            this.props.RemoverProdutoDoCarrinho(this.props.itemNoCarrinho.id)
          }
        >
          <RemoveShoppingCartIcon />
        </button>
      </Conteudo>
    );
  }
}
