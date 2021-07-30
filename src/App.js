import React from "react";
import { Filtros } from "./components/Filtros";
import { Produtos } from "./components/Produtos";
import { CarrinhoDeCompras } from "./components/CarrinhoDeCompras";
import styled from "styled-components";

//Definição da estilização da div de App
const ConteudoDeApp = styled.div`
  background-image: url("https://cdn.dribbble.com/users/43762/screenshots/1438974/ng-colab-space_night.gif");
  background-size: cover;
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital@1&display=swap");
  font-family: "Barlow Condensed", sans-serif;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

//Declaração de um Array de Objtos que serão nossos produtos
const produtos = [
  {
    //Não sabemos como gerar chaves únicas, então pensamos em um método que vimos na internet com keys, mas não tivemos nenhum sucesso, sendo assim foi estabelecido o método random, chance de apriximadamente de 1/1000000 de cair a mesma id.
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje do Veterano Espacial Laranja".toUpperCase(), //Estabelecemos o método random para brincar com os preços.
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://media.gazetadopovo.com.br/2019/10/17122621/48905248553_c0a868bbb4_c.jpg"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: 'Traje Espacial do filme "Armageddon"'.toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://www.inovacaotecnologica.com.br/noticias/imagens/010130190521-roupa-espacial-para-marte-1.jpg"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje Espacial do Buzz Lightyear".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://ibcdn.canaltech.com.br/J_rPCnKdnZSiwHchnY4GmudllBE=/1024x0/smart/i237822.jpeg"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje Espacial Cai na praia".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://images.unsplash.com/photo-1582024762518-c73edc92a723?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje Espacial para Campo".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://images.unsplash.com/photo-1583972962537-bd5229d25a6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje Espacial para tomar Cerveja".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://c.wallhere.com/photos/5a/ef/1920x1080_px_astronaut_beer_Earth_Moon_space-1060275.jpg!d"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje Espacial do período Coldwar".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://images.unsplash.com/photo-1541873676-a18131494184?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=361&q=80"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje Espacial com Jetpack".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://images.unsplash.com/photo-1583607252860-1df58a1b8c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje de exploração espacial".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Capacete Espacial do legionário".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXN0cm9uYXV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje Espacial para Montanhistas".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: Math.floor(Math.random() * 999999 + 1),
    descricao: "Traje Espacial Veterano lunar".toUpperCase(),
    preco: 100 * Math.floor(Math.random() * 99 + 1),
    imagem:
      "https://images.unsplash.com/photo-1446941303752-a64bb1048d54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

//Sintaxe padrão de extensão de classe.
class App extends React.Component {
  state = {
    valorMinimoDoFiltro: "",
    valorMaximoDoFiltro: "",
    nomeFiltrado: "",
    produtosNoCarrinho: []
  };

  //Primeiro onChange para setar o estado com base no que o usuário digitar no campo de input foi atribúido que tudo que o usuário digitar será aplicado o método toUpperCase().
  onChangeNomeFiltrado = (event) => {
    this.setState({ nomeFiltrado: event.target.value.toUpperCase() });
  };

  //Segundo onChange para setar o estado do campo de input com base no valor que o usuário digitar, ou setando o valor através do select type='number'
  onChangValorMinimoDoFiltro = (event) => {
    this.setState({ valorMinimoDoFiltro: event.target.value });
  };

  //Segundo onChange para setar o estado do campo de input com base no valor que o usuário digitar, ou setando o valor através do select type='number'
  onChangeMaximoDoFiltro = (event) => {
    this.setState({ valorMaximoDoFiltro: event.target.value });
  };

  //Função para adicionar item ao carrinho.
  AdicionarProdutoNoCarrinho = (identificacaoDeProduto) => {
    const produtoNoCarrinho = this.state.produtosNoCarrinho.find(
      (elemento) => identificacaoDeProduto === elemento.id
    );

    if (produtoNoCarrinho) {
      const novoProdutoNoCarrinho = this.state.produtosNoCarrinho.map(
        (elemento) => {
          if (identificacaoDeProduto === elemento.id) {
            return {
              ...elemento,
              quantidade: elemento.quantidade + 1
            };
          }

          return elemento;
        }
      );

      this.setState({ produtosNoCarrinho: novoProdutoNoCarrinho });
    } else {
      const produtoParaSerAdicionado = produtos.find(
        (elemento) => identificacaoDeProduto === elemento.id
      );

      const novoProdutoNoCarrinho = [
        ...this.state.produtosNoCarrinho,
        { ...produtoParaSerAdicionado, quantidade: 1 }
      ];

      this.setState({ produtosNoCarrinho: novoProdutoNoCarrinho });
    }
  };

  //Função para remover item do carrinho.
  RemoverProdutoDoCarrinho = (identificacaoDeProduto) => {
    const novoProdutoNoCarrinho = this.state.produtosNoCarrinho
      .map((elemento) => {
        if (elemento.id === identificacaoDeProduto) {
          return {
            ...elemento,
            quantidade: elemento.quantidade - 1
          };
        }
        return elemento;
      })
      .filter((elemento) => elemento.quantidade > 0);

    this.setState({ produtosNoCarrinho: novoProdutoNoCarrinho });
  };

  render() {
    return (
      <ConteudoDeApp>
        <Filtros
          valorMinimoDoFiltro={this.state.valorMinimoDoFiltro}
          valorMaximoDoFiltro={this.state.valorMaximoDoFiltro}
          nomeFiltrado={this.state.nomeFiltrado}
          onChangValorMinimoDoFiltro={this.onChangValorMinimoDoFiltro}
          onChangeMaximoDoFiltro={this.onChangeMaximoDoFiltro}
          onChangeNomeFiltrado={this.onChangeNomeFiltrado}
        />
        <Produtos
          produtos={produtos}
          valorMinimoDoFiltro={this.state.valorMinimoDoFiltro}
          valorMaximoDoFiltro={this.state.valorMaximoDoFiltro}
          nomeFiltrado={this.state.nomeFiltrado}
          AdicionarProdutoNoCarrinho={this.AdicionarProdutoNoCarrinho}
        />
        <CarrinhoDeCompras
          produtosNoCarrinho={this.state.produtosNoCarrinho}
          RemoverProdutoDoCarrinho={this.RemoverProdutoDoCarrinho}
        />
      </ConteudoDeApp>
    );
  }
}

export default App;
