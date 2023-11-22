// store.js
import { createStore } from "vuex";
export default createStore({
  state: {
    carrinho: [],
    endereco: null
  },
  mutations: {
    adicionarAoCarrinho(state, produto) {
      state.carrinho.push(produto);
    },
    removerDoCarrinho(state, produtoId) {
      const carrinho = state.carrinho;
      const produto = carrinho.find((item) => item.id === produtoId);

      if (produto) {
        // Atualizar disponibilidade diretamente no produto do carrinho
        produto.disponivel += produto.quantidade;
        produto.quantidade = 0;

        // Remover do carrinho
        const index = carrinho.indexOf(produto);
        if (index !== -1) {
          carrinho.splice(index, 1);
        }
      }
    },
    atualizarCarrinho(state, novoItem) {
      const index = state.carrinho.findIndex((item) => item.id === novoItem.id);
      if (index !== -1) {
        state.carrinho[index] = novoItem;
      }
    },
    definirEndereco(state, endereco){
      state.endereco = endereco;
      console.log(ola)
    }
  },
  actions: {
    adicionarAoCarrinho({ commit }, produto) {
      commit("adicionarAoCarrinho", produto);
    },
    removerDoCarrinho({ commit }, produtoId) {
      commit("removerDoCarrinho", produtoId);
    },
    
  },
  getters: {
    getCarrinho(state) {
      return state.carrinho;
    },
  },
});
