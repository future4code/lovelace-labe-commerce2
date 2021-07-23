import React from "react";
import styled from "styled-components";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

//Estilização aplicada para a "main" de Produto
const ConteudoDeProduto = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
`;

//Estilização aplicada para os cards do produto
const InfoDeProduto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-height: 300px;
  p {
    margin: 5px 0;
    max-height: 100px;
  }
`;

//Estilização aplicada somente os botões de adicionar produto ao carrinho.
const BotaoDeAdicionarAoCarrinho = styled.button`
  align-self: center;
  margin-top: 4px;
  border-radius: 20px;
  width: 200px;
  height: 50px;
  border: none;
  opacity: 0.5;
  :hover {
    cursor: pointer;
    color: white;
    background: transparent;
    transition-duration: 1s;
  }
`;

export class ItemProduto extends React.Component {
  render() {
    const elemento = this.props.elemento;
    return (
      <ConteudoDeProduto>
        <img src={elemento.imagem} />
        <InfoDeProduto>
          <p>{elemento.descricao}</p>
          <p>R${elemento.preco},00</p>
          <BotaoDeAdicionarAoCarrinho
            onClick={() => this.props.AdicionarProdutoNoCarrinho(elemento.id)}
          >
            <AddShoppingCartIcon />
          </BotaoDeAdicionarAoCarrinho>
        </InfoDeProduto>
      </ConteudoDeProduto>
    );
  }
}
