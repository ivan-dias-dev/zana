<template>
  <header>
    <nav
      class="navbar navbar-expand-sm fixed-top navbar-style"
      :class="{ fundoAfixx: isAffixed, isAffixed: !isAffixed }"
    >
      <div class="container">
        <div class="col-md-4 d-flex align-items-end justify-content-center">
          <span href="" class="icone"></span>
          <router-link to="/" class="barra">
            <a href="" class="zaninha">{{ nome }} </a>
          </router-link>
        </div>

        <div class="row collapse navbar-collapse col-md-3 d-flex">
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item">
              <router-link to="/" class="barra">
                <a href="" class="nav-link align-content-end link">Inicio</a>
              </router-link>
            </li>
            <router-link to="/fritos" class="barra">
              <li class="nav-item">
                <a href="#peixesmar" class="nav-link link">Fritos</a>
              </li>
            </router-link>
            <router-link to="/congelados" class="barra">
              <li class="nav-item">
                <a href="#peixesmar" class="nav-link link">Congelados</a>
              </li>
            </router-link>
            <li class="nav-item">
              <a href="#peixesmar" class="nav-link link">Parcerias</a>
            </li>
            <li class="nav-item">
              <a href="#peixesmar" class="nav-link link">Contato</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 d-flex align-items-end justify-content-start">
          <div class="nav-item">
            <router-link to="/Login"
              ><button type="button" class="btn estilized ms-1 me-1">
                Login
              </button></router-link
            >
          </div>
          <div
            class="nav-item d-flex align-items-center justify-content-center me-1"
            style="
              background-color: rgb(58, 58, 58, 0.2);
              height: 2em;
              width: 2em;
              border-radius: 30px;
            "
          >
            <i class="fa-solid fa-user fa-lg" style="color: white"></i>
          </div>
          <div
            class="nav-item d-flex align-items-center justify-content-center"
            style="
              background-color: rgb(58, 58, 58, 0.2);
              height: 2em;
              width: 2em;
              border-radius: 30px;
            "
          >
            <i class="fa-solid fa-map fa-lg" style="color: white"></i>
          </div>
          <div>
           
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
  
  <script>


export default {
  name: "Header",
  
  data() {
    return {
      nome: "Zaninha Salgados",
      isAffixed: null,
      fundoAfixx: false,
    };
  },
  methods: {
    handleScroll() {
      this.isAffixed = window.scrollY > 400;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zaninha {
  font-size: 28px;
  text-align: center;
  font-family: handy;
  color: #dc111e;
}
.zaninha:hover {
  color: rgb(255, 0, 0);
}
.fundoAfixx {
  background-color: #fafafa;
  max-width: 100%;
  transition: 0.5s;
}
.fundoAfixx .link {
  color: #020202 !important;
}

.link {
  color: #ffffff !important;
  border-radius: 10px;
}
.link:hover {
  color: rgb(255, 0, 0) !important;
  transition: 0.5s;
  border: 0.1px solid red;
  border-radius: 10px;
}
.isAffixed {
  background-color: rgba(24, 22, 22, 0.3);
  max-width: 100%;
  transition: 0.5s;
}

/*.fundoAfixx {
  background-color: #0c0c0c !important;
}*/
.icone {
  background-image: url(/public/img/coxinha.png);
  width: 50px;
  height: 50px;
  background-size: cover;
}
.estilized {
  background-color: #dc111e !important;
  color: #fafafa !important;
}
.estilized:hover {
  background-color: #ffffff !important;
  color: #020202 !important;
  border: 1px solid #020202 !important ;
}
.estilized:active {
  background-color: #ffffff !important;
  color: #020202 !important;
  border: 1px solid rgb(156, 84, 25) !important ;
}
li {
  list-style: none;
}
</style>
