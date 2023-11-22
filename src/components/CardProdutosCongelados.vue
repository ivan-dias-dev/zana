<template >
  <div class="fundo pt-5 pb-5">
    <div class="row align-items-center justify-content-center">
      <div
        class="cardNovo col-md-3 mt-1 mb-1 me-1"
        v-for="produto in produtos"
        :key="produto.id"
        ref="meuCardNovo"
      >
        <div class="row">
          <div class="cardMid">{{ produto.tipo }}</div>
          <div
            class="cardzinTopo"
            :style="{ 'background-image': `url(${produto.urlImagem})` }"
          ></div>

          <div class="cardzin">
            <div class="valor" id="valor-coxinha">
              {{ produto.valor.toFixed(2) }}
            </div>
          </div>
          <button
            class="btn btn botao-item card-footer text-center"
            name="risolis"
            @click="adicionarAoCarrinho(produto)"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProdutosCongelados",
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    async getProdutos() {
      const req = await fetch("http://localhost:3000/salgadosFritos");
      const data = await req.json();
      console.log(data.Congelados);
      this.produtos = data.Congelados;
    },
    adicionarAoCarrinho(produto) {
      const itemExistente = this.$store.getters.getCarrinho.find(
        (item) => item.id === produto.id
      );

      //console.log("qttd", produto.quantidade, produto.disponivel);
      if (!itemExistente && produto.disponivel > 0) {
        produto.quantidade += 1;
        produto.disponivel -= 1;
        this.$store.dispatch("adicionarAoCarrinho", produto);
      } else if (itemExistente && produto.disponivel > 0) {
        itemExistente.quantidade += 1;
        produto.disponivel -= 1;
        //this.$store.dispatch("atualizarCarrinho", itemExistente);
      }
    },
  },
  mounted() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.fundo {
  background-color: rgb(232, 247, 247);
}
.cardNovo {
  height: 25em;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: rgb(241, 241, 241);
}
.cardNovo:hover {
  box-shadow: 0px 10px 10px rgb(104, 104, 104);
}
.cardzinTopo {
  background-image: url(/public/img/ris1.jpg);
  background-repeat: no-repeat;
  background-size: 100% 15em;
  width: 100%;
  height: 15em;
}
.cardMid {
  font-size: 22px;
  color: black;
  font-weight: 600;
  padding: 2px;
  display: block;
}

.cardzin {
  height: 6em;
  margin: 2px 0 2px 0;
}

.botao-item {
  background-color: #1cc475;
  border-bottom-right-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
  color: black;
}
.botao-item:hover {
  background-color: rgb(216, 175, 12);
  border-bottom-right-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
  color: aliceblue !important;
}

/* Hide scrollbar for IE, Edge and Firefox */
.row {
  --bs-gutter-x: 0rem;
}

.valor {
  height: 2em;
  color: rgb(216, 175, 12);
  text-align: center;
  font-weight: bold;
  font-size: 26px;
}
</style>