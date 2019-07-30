<template>
  <div class="container-fluid">
    <EmployeeComponent></EmployeeComponent>
  </div>
</template>

<script>
import EmployeeComponent from "./EmployeeComponent";
export default {
  data() {
    return {};
  },
  components: {
    EmployeeComponent
  }
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.card-header {
  margin-left: 10px;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
}
</style>

