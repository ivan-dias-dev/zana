<template>
  <div class="row justify-content-center">
    <div class="col-md-12 imgs padding-extra">
      <p
        class="texto_imagem mt-3 p-3"
        style="color: #000000; font-size: 22px; border: none"
      >
        Bem-vindo à nossa loja de salgados, onde você encontra uma grande
        variedade de salgados frescos e congelados!<br />
        Para sua comodidade pode realizar o pedido neste site ou entre em
        contato consco via whatsapp!
        <button class="btn btn-success btn-sm">
          <i class="fa-brands fa-whatsapp"></i></button
        ><br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BemVindo",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
