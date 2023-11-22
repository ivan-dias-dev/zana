<template>
  <div class="modal" v-if="ModalVisivel">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="whidth: 100%">
          <span class="fechar" @click="closeModal">&times;</span>
          <h2>Favor Preencher sua localizacão</h2>
          <form
            class="row d-flex justify-content-center align-items-center forms"
          >
            <div class="col-md-6">
              <div class="mb-1 input">
                <label for="" class="form-label">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="helpId"
                  placeholder="Digite seu nome"
                  v-model="nome"
                />
              </div>
              <div class="mb-1 input">
                <label for="" class="form-label">Telefone</label>
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Digite seu telefone"
                  v-model="telefone"
                />
              </div>
              <div class="input">
                <label for="" class="form-label">Endereço</label>
                <input
                  v-model="endereco"
                  @input="autoCompletarEndereco"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Digite seu endereço"
                />
              </div>
              <label class="form-check-label col-md-12" for="">
                <span class="me-1">Aceitar termos e condições</span>

                <input
                  v-model="texto"
                  class="form-check-input"
                  type="checkbox"
                  v-on:click="checkBoxAtiva"
                />
              </label>
            </div>
            <div v-if="checkBox == true">
              <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="definirEndereco"
              >
                Enviar
              </button>
            </div>
            <div>
              <ul v-if="sugestoes.length > 0">
                <li
                  v-for="sugestao in sugestoes"
                  :key="sugestao.id"
                  @click="selecionarSugestao(sugestao)"
                >
                  {{ sugestao.description }}
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalMapa",
  data() {
    return {
      ModalVisivel: false,
      jaEnderecado: false,
      endereco: "",
      nome: "",
      telefone: "",
      sugestoes: [],
      botaoEnviaEndereco: false,
      checkBox: false,
    };
  },
  methods: {
    openModal() {
      if (!this.jaEnderecado) {
        setTimeout(() => {
          console.log("modal rodando2");
          this.ModalVisivel = true;
          //this.$store.commit("setBlur", true);
        }, 1000);
      }
    },
    closeModal() {
      this.ModalVisivel = false;
      // this.$store.commit("setBlur", false);
    },
    autoCompletarEndereco() {
      if (this.endereco.length > 3) {
        const autocompleteService =
          new window.google.maps.places.AutocompleteService();
        autocompleteService.getPlacePredictions(
          {
            input: this.endereco,
          },
          (sugestoes, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              this.sugestoes = sugestoes;
            }
          }
        );
      } else {
        this.sugestoes = [];
      }
    },
    selecionarSugestao(sugestao) {
      this.endereco = sugestao.description;
      this.sugestoes = [];
    },
    checkBoxAtiva() {
      console.log(this.checkBox);
      this.checkBox = !this.checkBox;
    },
    definirEndereco() {
      this.$store.commit("definirEndereco", this.endereco);
      console.log("prevent", this.endereco, this.nome, this.telefone);
    },
  },
  mounted() {
    console.log("modal rodando");
    this.openModal();
  },
};
</script>

<style scoped>
.input {
  text-align: left;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.fechar {
  position: absolute;
  top: 4px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: aliceblue;
  background-color: #f0283c !important;
  border-radius: 100% !important;
  width: 30px;
  height: 30px;
}
.container {
  position: fixed;
  width: 50%;
  height: 60%;
  background-color: rgb(241, 241, 241);
  top: 30%;
  left: 25%;
}
.forms {
  background-color: rgb(253, 253, 253);
  height: 100%;
}

ul {
  text-decoration: none;
  list-style-type: none;
}
li {
  border: 1px solid rgb(236, 236, 236);
  background-color: rgb(247, 247, 247);
  margin-top: 3px;
  border-radius: 10px;
}
</style>