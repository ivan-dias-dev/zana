<template>
  <Header />

  <Open />

  <BemVindo />

  <Carrinho />
  <Footer />
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import Open from "@/components/Open.vue";
import BemVindo from "@/components/BemVindo.vue";
import Carrinho from "@/components/Carrinho.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    Open,
    BemVindo,
    Carrinho,
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