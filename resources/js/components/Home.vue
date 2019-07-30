<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/employee">ExampleComponent</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/department">DepartmentComponent</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
        </ul>
      </div>
    </nav>
    <h1>Home</h1>
    <h5>{{msg}}</h5>
  </div>
</template>
<script>
export default {
  data() {
    return { msg: "Welcome to Your Vue.js App" };
  }
};
</script>
<style scoped>
</style>
