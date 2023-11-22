<template>
  <div class="">
    <button @click="Carrinho" class="btn btn-success botaocxis">
      <span
        class="botaocxis2"
        style=""
        v-show="quantidadeProduto !== null && quantidadeProduto !== 0"
      >
        {{ quantidadeProduto }}
      </span>
      <i class="fa-solid fa-cart-plus fa" style="color: #0a0a0a"></i>
    </button>

    <div :class="{ carrinho: carrinho, carrinho2: !carrinho }">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Preço</th>
            <th scope="col">Qtd</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtosCarrinho" :key="produto.id">
            <th scope="col">{{ produto.tipo }}</th>
            <th scope="col">R${{ produto.valor.toFixed(2) }}</th>
            <th scope="col " class="inputed">
              <input
                disabled
                type="text"
                v-model="produto.quantidade"
                @input="calcularTotal"
                @change="atualizarCarrinho(produto)"
              />
            </th>
            <th scope="col" class="e">
              <button
                class="btn btnExcluir btn-danger btn-sm"
                @click="removerDoCarrinho(produto.id)"
              >
                X
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <div class="botao align-items-end">
        <button class="btn">Finalizar pedido</button>
        <br />
        <span class="inp"> R$ {{ calcularTotal() }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carrinho",
  data() {
    return {
      carrinho: false,
      quantidadeProduto: null,
    };
  },
  computed: {
    produtosCarrinho() {
      const produtos = this.$store.getters.getCarrinho;
      // console.log("computados", produtos);
      return produtos;
    },
  },
  methods: {
    Carrinho() {
      this.carrinho = !this.carrinho;
    },
    calcularTotal(produto) {
      const carrinho = this.$store.getters.getCarrinho;

      let total = 0;
      carrinho.forEach((produto) => {
        total += produto.valor * produto.quantidade;
        //console.log("produto", p.valor ,p.quantidade);
      });
      if (carrinho.length != 0) {
        //console.log("aqui", carrinho.length);
        this.quantidadeProduto = carrinho.length;
      }
      return total.toFixed(2);
    },
    removerDoCarrinho(produtoId) {
      ///const carrinho = this.$store.getters.getCarrinho;
      this.quantidadeProduto = 0;
      this.$store.dispatch("removerDoCarrinho", produtoId);
    },
    atualizarCarrinho(produto) {
      console.log(produto);
    },
  },
};
</script>

<style scoped>
th {
  width: 40px !important;
  border: 1px solid rgb(245, 245, 245);
}
.botaocxis {
  position: fixed;
  right: 1em;
  top: 5em;
  z-index: 5001;
}
th .btn {
  background-color: #dc3545 !important;
  border-radius: 100% !important;
}
.btnExcluir:hover {
  background-color: #f0283c !important;
  border-radius: 10% !important;
}
.botaocxis2 {
  position: fixed;
  right: 1em;
  top: 4.5em;
  z-index: 5001;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inputed input {
  width: 100%;
}
.inputed {
  width: 10%;
}
.carrinho {
  background-color: rgb(228, 228, 228);
  width: 20em;
  right: 0em;
  z-index: 5000;
  position: fixed;
  top: 8.1em;
  border-radius: 10px;
  transition: 1s;
  overflow-y: scroll;
}
.carrinho2 {
  display: none;
}
/*-------------------------------------    Botao caixinha   ------------------------------------------------------*/
.botao {
  border: none;
  /*position: fixed !important;
  bottom: 5% !important;
  text-align: center;*/
  background-color: #ececec;
}

.btn {
  background-color: #1cc475 !important;
}
</style>