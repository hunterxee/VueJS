<template>
  <div v-if="value">
    <h1>value is true</h1>
  </div>
  <div v-else>
    <h1>Value is false</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true
    };
  }
};
</script>
<style>
h1 {
  color: red;
}
</style>


