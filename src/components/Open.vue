<template>
  <div>
    <div class="primeira-div" alt="">
      <div class="container">
        <div
          class="row d-flex justify-content-start align-items-center"
          style="height: 30em"
        >
          <div class="col-md-4" style="text-align: start">
            <h1 style="color: #f1f1f1">Zaninha Salgados</h1>
            <h2 style="color: #f1f1f1">Produtos de 5 estrelas</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12" style="background-color: #f1f1f1; width: 100%">
      <div class="container">
        <div class="row">
          <div
            class="row justify-content-start"
            style="height: 100%; text-align: start"
          >
            <div
              class="col-md-3 ms-5"
              style="padding: 30px 0 0 60px; height: 100%"
            >
              <span
                :class="{
                  aberto: statusLoja === 'Aberto',
                  fechado: statusLoja === 'Fechado',
                }"
              >
                • {{ statusLoja }}
              </span>
              <p>Pedido mínimo: {{ pedMin }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Open",
  data() {
    return {
      pedMin: "R$ 50,00",
      statusLoja: null,
    };
  },
  methods: {
    verificaHorario() {
      var horarioDeAtendimento = new Date().getHours();

      if (horarioDeAtendimento >= 8 && horarioDeAtendimento <= 20) {
        this.statusLoja = "Aberto";
      } else {
        this.statusLoja = "Fechado";
      }
    },
  },
  mounted() {
    this.verificaHorario();
  },
};
</script>
<style>
.aberto {
  font-size: 22px;
  color: rgb(2, 160, 2);
  font-family: handy;
}
.fechado {
  font-size: 22px;
  color: rgb(160, 2, 10);
  font-family: handy;
}

.primeira-div {
  background-image: url(/public/img/coxi.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 100% 30em;
  width: 100%;
  height: 30em;
}
</style>