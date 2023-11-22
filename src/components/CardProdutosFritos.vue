<template>
  <div class="row align-items-center justify-content-center">
    <div
      class="cardNovo col-md-3 mt-5 me-1"
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
</template>

<script>
export default {
  name: "CardProduto",
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    async getProdutos() {
      const req = await fetch("http://localhost:3000/salgadosFritos");
      const data = await req.json();
      this.produtos = data.Fritos;
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
    estilizarCardNovo() {
      setTimeout(() => {
        let meuCardNovo = this.$refs.meuCardNovo;

        if (meuCardNovo.length > 0) {
          // Iterar sobre os elementos e adicionar ou remover classes conforme necessário
          meuCardNovo.forEach((cardNovo) => {
            cardNovo.classList.add("meu-card-novo");
          });
        } else {
          console.error("Elementos .cardNovo não encontrados.");
        }
      }, 100);
    },
    getClassePelaRota() {
      // Obtém o caminho atual da rota
      const rota = this.$route.path;
      // Lógica para decidir a classe com base no caminho da rota
      if (rota === "/fritos") {
        console.log(rota);
        return "classe-para-inicio";
      } else if (rota === "/congelados") {
        this.estilizarCardNovo();
        console.log(rota);
        return "classe-para-outra-rota";
      } else {
        return "classe-padrão";
      }
    },
  },
  mounted() {
    this.getProdutos();
    this.getClassePelaRota();
  },
};
</script>

<style scoped>
.cardNovo {
  height: 25em;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: rgb(233, 230, 226);
}
.meu-card-novo {
  background-color: rgb(187, 231, 235);
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