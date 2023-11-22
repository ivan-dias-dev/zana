<template>
  <div>
    <Header />
  </div>
  <div class="home">
    <Open />
  </div>

  <CardProduto />

  <Carrinho />

  <Footer />
</template>
  
  <script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import Open from "@/components/Open.vue";
import BemVindo from "@/components/BemVindo.vue";
import Carrinho from "@/components/Carrinho.vue";
import CardProduto from "@/components/CardProdutosFritos.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Fritos",
  components: {
    Header,
    Open,
    BemVindo,
    Carrinho,
    CardProduto,
    Footer,
  },
};
</script>
  <style>
.home {
  background-color: bisque;
  font-family: "Open Sans", sans-serif;
}
</style>