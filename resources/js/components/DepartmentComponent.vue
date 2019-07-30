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
    <table class="table">
      <thead>
        <tr>
          <td>Departmane ID</td>
          <td>Departmane Name</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dep in departments">
          <td>{{dep.DEPARTMENT_ID}}</td>
          <td>{{dep.DEPARTMENT_NAME}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      departments: [
        {
          DEPARTMENT_ID: 11,
          DEPARTMENT_NAME: "COMPUTER SCIENCE"
        },
        {
          DEPARTMENT_ID: 12,
          DEPARTMENT_NAME: "PHYSICS"
        },
        {
          DEPARTMENT_ID: 13,
          DEPARTMENT_NAME: "CHEMSITRY"
        },
        {
          DEPARTMENT_ID: 14,
          DEPARTMENT_NAME: "BIOLOGY"
        },
        {
          DEPARTMENT_ID: 15,
          DEPARTMENT_NAME: "IT"
        },
        {
          DEPARTMENT_ID: 16,
          DEPARTMENT_NAME: "SOFTWARE ENGINEERING"
        },
        {
          DEPARTMENT_ID: 17,
          DEPARTMENT_NAME: "MICROBILOGY"
        },
        {
          DEPARTMENT_ID: 18,
          DEPARTMENT_NAME: "BOTANY"
        },
        {
          DEPARTMENT_ID: 19,
          DEPARTMENT_NAME: "ENGLISH"
        },
        {
          DEPARTMENT_ID: 20,
          DEPARTMENT_NAME: "URDU"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>
