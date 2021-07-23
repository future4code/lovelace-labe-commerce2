import React from "react";
import { ItensNoCarrinho } from "./ItensNoCarrinho";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//Estilização que será aplicado para todos os itens que estiverem selecionados no carrinho. Obs.: Foi realizado uma tentativa de inclusão de imagem do item, porém o meso está fazendo a página dar scroll para o lado. Sim, nós não pensamos em atribuir medidas relativas para o Web, consideramos já como um ponto de melhoria de nossa interface.
const ConteudoCarrinho = styled.div`
  padding: 8px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;

  /*Estilização que será aplicada somente a classe do material-icon utilizado*/
  .MuiSvgIcon-root {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 5em;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    color: aquamarine;
    opacity: 0.8;
  }
`;

//Estilização aplicada somente para item no carrinho.
const ListaNoCarrinho = styled.div`
  display: grid;
  gap: 8px;
`;

export class CarrinhoDeCompras extends React.Component {
  obterValorTotal = () => {
    let valorTotal = 0;

    for (let elemento of this.props.produtosNoCarrinho) {
      valorTotal += elemento.preco * elemento.quantidade;
    }

    return valorTotal;
  };

  render() {
    return (
      <ConteudoCarrinho>
        <ShoppingCartIcon />
        <ListaNoCarrinho>
          {this.props.produtosNoCarrinho.map((elemento) => {
            return (
              <ItensNoCarrinho
                itemNoCarrinho={elemento}
                RemoverProdutoDoCarrinho={this.props.RemoverProdutoDoCarrinho}
              />
            );
          })}
        </ListaNoCarrinho>
        <p>Valor total: R${this.obterValorTotal()},00</p>
      </ConteudoCarrinho>
    );
  }
}
