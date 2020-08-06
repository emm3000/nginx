<template>
  <div>
    <h1>{{dd}}</h1>
    <!-- <h1>{{$store.getters}}</h1> -->
    <v-btn @click="console">Prueba Consola</v-btn>
    <v-btn @click="$store.commit('otro')">aumentar login</v-btn>
    <v-btn @click="wwwactions({numero:8})">aumentar prueba</v-btn>
    <v-btn @click="$store.dispatch('Prueba/contexto')">probando contextos</v-btn>
    <v-btn @click="local">Jugando con localStorage</v-btn>
    <v-btn @click="eliminar">eliminarlocalStorage</v-btn>
    <v-btn @click="validando">validando</v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      xxx: 8 == 9 ? "helo" : "aaa"
    };
  },
  methods: {
    local() {
      localStorage.setItem('item1', 12)
    },
    eliminar() {
      localStorage.removeItem('item1')
    },
    validando(){
      if(localStorage.getItem('item1')) {
        console.log('existe en el localstorage', localStorage.getItem('item1'))
      } else {
        console.log('no existe')
      }
    },
    console() {
      console.log(typeof this.$store.state);
    },
    //...mapMutations('Login', ['www']),
    ...mapMutations("Prueba", ["www"]),
    ...mapActions("Prueba", ["wwwactions"])
  },
  computed: {
    ...mapState({
      nombre: state => state.Prueba.name
    }),
    ...mapGetters("Prueba", ["dd"])
    // ...mapState(["nombre"]),
    // ...mapState("Login", ["nombre"]),
    // ...mapGetters("Login", ["aumentar"])
  },
  watch: {}
};
</script>
