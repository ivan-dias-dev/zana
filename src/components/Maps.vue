<template>
  <div ref="mapContainer" class="map-container"></div>
  <div>A distancia é {{ distancia }}km</div>
  <ModalMapa />
</template>
  
  <script>
import ModalMapa from "./ModalMapa.vue";

export default {
  name: "MapView",
  components: {
    ModalMapa,
  },
  data() {
    return {
      map: null,
      endereco:
        "R. Maurício Scolaro, 417-325 - Miringuava, São José dos Pinhais - PR, 83090-300",
      distancia: null,
    };
  },
  methods: {
    loadGoogleMaps() {
      return new Promise((resolve) => {
        window.initMap = resolve;
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCjy8G-E7wdrtdXzBE052GQ3MtPWJVJNc8&libraries=places&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      });
    },
    initMap() {
      // Código para inicializar o mapa aqui
      // ...
      // Coordenadas para o centro do mapa
      const center = { lat: -25.614120483398438, lng: -49.16407012939453 };

      // Configurações iniciais do mapa
      const mapOptions = {
        center: center,
        zoom: 14,
      };

      // Crie o mapa no elemento referenciado pelo ref
      this.map = new window.google.maps.Map(
        this.$refs.mapContainer,
        mapOptions
      );

      // Adicione um marcador
      const marker = new window.google.maps.Marker({
        position: center,
        map: this.map,
        title: "Marcador de Exemplo",
      });
    },
    /////////////////////////////////////////////////////
    async calcularDistancia() {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            this.endereco
          )}&key=AIzaSyCjy8G-E7wdrtdXzBE052GQ3MtPWJVJNc8`
        );
        const data = await response.json();
        console.log(response);
        console.log(data);
        const location = data.results[0].geometry.location;
        // Aqui você teria as coordenadas (location.lat e location.lng)
        console.log("latitude", location.lat, "long", location.lng);

        // Exemplo de cálculo de distância (para fins ilustrativos)
        const distancia = this.calcularDistanciaEntrePontos(
          location.lat,
          location.lng,
          -25.61384730965772,
          -49.16415721948772
        );
        this.distancia = distancia.toFixed(2); // Limitando para 2 casas decimais
      } catch (error) {
        console.error("Erro ao calcular distância:", error);
      }
    },
    calcularDistanciaEntrePontos(lat1, lng1, lat2, lng2) {
      // Exemplo de cálculo de distância usando a fórmula de Haversine
      const R = 6371; // raio da Terra em km
      const dLat = this.deg2rad(lat2 - lat1);
      const dLng = this.deg2rad(lng2 - lng1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) *
          Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distancia = R * c;
      return distancia;
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180);
    },
  },
  mounted() {
    // Carregue a API do Google Maps de forma assíncrona
    this.loadGoogleMaps().then(() => {
      // Inicialize o mapa quando a API estiver carregada
      this.initMap();
    });
    this.calcularDistancia();
  },
};
</script>
  
  <style scoped>
.map-container {
  height: 10em;
  width: 30em;
}
</style>