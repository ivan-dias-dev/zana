<template>
  <div>
    <Header />

    <Open />
    <h1>Congelados</h1>
    <CardProdutosCongelados />

    <Carrinho />

    <Footer />
  </div>
</template>
    
    <script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import Open from "@/components/Open.vue";
import BemVindo from "@/components/BemVindo.vue";
import Carrinho from "@/components/Carrinho.vue";
import Footer from "@/components/Footer.vue";

import CardProdutosCongelados from "@/components/CardProdutosCongelados.vue";
export default {
  name: "Congelados",
  components: {
    Header,
    Open,
    BemVindo,
    Carrinho,
    Footer,
    CardProdutosCongelados,
  },
};
</script>
    <style scoped>
h1 {
  background-color: rgb(190, 235, 235);
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0 !important;
}
</style>