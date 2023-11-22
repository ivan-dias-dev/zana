
<template>
  <router-view />
  
</template>

<style>
@font-face {
  font-family: handy;
  src: url(../fontes/HandyCasualCondensed-Regular.otf);
  font-family: handy-oblique;
  src: url(../fontes/HandyCasualCondensed-Oblique.ttf);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  /* background-attachment: fixed;*/
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  text-decoration: none !important;
  transition: filter 0.3s ease;
}

.row {
  --bs-gutter-x: 0rem !important;
}


.margin-top-saldacao {
  margin-top: 2em;
}

.card-text {
  padding: 0 22.5px;
}

.espaco {
  height: 6em;
}

.imagemcarr {
  background-image: url(/public/img/1.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
}

.div2 {
  background-color: #dc111e;
  height: 10em;
  width: 100%;
  border: none;
}

.divpai {
  background-color: #c2e2c1;
  height: 3em;
  width: 100%;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
}

.intput-mini {
  width: 5em;
  height: 1.5em;
}

.input-total {
  height: 2em;
  width: 8em;
}
.margin-top-saldacao {
  margin-top: 7%;
}

.imgs {
  background-repeat: no-repeat;
  background-color: #e6cb9e;
  width: 100%;
  height: 100%;
  text-align: center;
  background-position: bottom;
}
.texto_imagem {
  text-align: center;
  bottom: 0;
  top: auto;
  color: #f0f0f0;
  font-size: 16px;
}

.sobre {
  background-repeat: no-repeat;
  background-color: #ffefd5;
  width: 100%;
  height: 100%;
  text-align: center;
  background-position: bottom;
  padding: 3em;
  padding-top: 1em;
}
.texto_sobre {
  font-size: 18px;
  text-align: center;
  bottom: 0;
  top: auto;
  color: #f0f0f0;
}

.itens {
  height: 30em;
}

.div1 {
  background-color: bisque;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 3em;
}

/* Hide scrollbar for IE, Edge and Firefox */

.carousel-indicators {
  bottom: -277px;
}

/*--------------------------------cartões----------------------------------------------*/
.conteiner {
  position: relative;
  padding: 15px;
  margin: 0 auto;
  max-width: 1080px;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

.valor {
  height: 2em;
  color: #1b201c;
  text-align: center;
}

.card-letras {
  padding: 1em;
}
.card-body {
  padding: 0;
  text-align: center;
}

.card-title {
  text-align: center;
  flex-direction: row;
}

.table {
  width: 30%;
}

.card-product {
  width: 100%;
}
/*--------------------------------botão whats----------------------------------------------*/

.whatsapp {
  background: #000000;
  bottom: 25px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  box-shadow: 2px 2px 12px rgba(22, 124, 60, 0.2);
  transition: 0.4s;
  align-items: center;
  justify-content: center;
}

.robbu-whatsapp-button {
  display: flex;
  position: fixed;
  background: #000000;
  bottom: 25px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  box-shadow: 2px 2px 12px rgba(22, 124, 60, 0.2);
  transition: 0.4s;
  align-items: center;
  justify-content: center;
}

.rwb-tooltip {
  position: absolute;
  bottom: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 15px;
  color: #2d2d2d;
  font-size: 16px;
  white-space: nowrap;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: 0.4s;
  pointer-events: none;
}

.rwb-tooltip:after {
  display: block;
  content: "";
  position: absolute;
  top: 85%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 7px 0 7px;
  border-color: #fff transparent transparent transparent;
  transition: 0.4s;
}

.robbu-whatsapp-button {
  right: 25px;
}

#robbu-whatsapp-button > img {
  display: block;
  width: 34px;
  height: 34px;
}

.robbu-whatsapp-button:hover {
  background: #21bd5c;
  box-shadow: 3px 3px 12px rgba(14, 81, 39, 0.4);
}

#robbu-whatsapp-button:hover > .rwb-tooltip {
  opacity: 1;
  transform: translateX(0);
}

#robbu-whatsapp-button:hover > .rwb-tooltip:after {
  top: 100%;
  transition-delay: 0.4s;
}
/*-----------------------------------------------------------------------------------*/
.carousel-dark .carousel-caption {
  color: #ffffff;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: -14.75rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #ffffff;
  text-align: center;
}
.carousel-item {
  transition: transform 0.6s ease-in-out;
}
.titulo-sobre {
  font-family: handy-oblique;
  font-size: 24px;
}
/*--------------------------------media queryes peq----------------------------------------------*/

.padding-extra {
  color: #000000;
  padding: 0 3em 0 3em;
}
</style>
