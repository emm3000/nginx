<template>
  <v-app>
    <v-btn text :to="{name: 'componenteA'}">Componente A</v-btn>
    <v-btn text :to="{name: 'componenteB'}">Componente B</v-btn>
    <v-btn text :to="{name: 'componenteC'}">Componente C</v-btn>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      emm: "Edgardoaeamanito"
    };
  }
};
</script>