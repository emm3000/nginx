<template lang="pug">
  .hola {{hola}}
</template>

<script>
export default {
  data() {
    return {
      hola: "mundo"
    };
  }
};
</script>

<style lang="scss">
.hola {
  background: red
}
</style>