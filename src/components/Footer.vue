<template>
  <footer>
    <div class="container">
      <div
        class="row d-flex align-items-center justify-content-center"
        style="height: 10em"
      >
        <div
          class="col-md-6 d-flex justify-content-center align-items-center"
          style="color: white"
        >
          <div class="m-1">Contato: 41-98420 4961</div>
          <div class="m-1"><i class="fa-brands fa-instagram"></i></div>
          <div class="m-1"><i class="fa-brands fa-facebook"></i></div>
          <div class="m-1"><i class="fa-brands fa-whatsapp"></i></div>
        </div>
        <div class="col-md-3 d-flex align-items-end justify-content-end">
          <Maps />
        </div>
        <div>Develop by Ivan Dias</div>
      </div>
    </div>
  </footer>
</template>

<script>
import Maps from "./Maps.vue";
export default {
  name: "footer",
  components: {
    Maps,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  height: 100%;
  background-color: rgb(26, 25, 25);
}
</style>
