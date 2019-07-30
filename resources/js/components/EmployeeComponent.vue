<template>
  <div>
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
    <div
      class="modal fade"
      id="modalLoginForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <!-- <h4 class="modal-title w-100 font-weight-bold">Sign in</h4> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="addItem" id="form">
              <div class="md-form mb-1">
                <label>Employee ID</label>
                <input type="number" class="form-control" v-model="modal.EMPLOYEE_ID" />
                <span v-show="errors">{{errors}}</span>
              </div>
              <div class="md-form mb-1">
                <label>First Name</label>
                <input type="text" class="form-control" v-model="modal.FIRST_NAME" />
                <span v-show="errors">{{errors}}</span>
              </div>
              <div class="md-form mb-1">
                <label>Last Name</label>
                <input type="text" class="form-control" v-model="modal.LAST_NAME" />
                <span v-show="errors">{{errors}}</span>
              </div>
              <div class="md-form mb-1">
                <label>Email address</label>
                <input type="text" class="form-control" v-model="modal.EMAIL" />
                <span v-show="errors">{{errors}}</span>
              </div>
              <div class="md-form mb-1">
                <label>Phone Number</label>
                <input type="number" class="form-control" v-model="modal.PHONE_NUMBER" />
                <span v-show="errors">{{errors}}</span>
              </div>
              <div class="md-form mb-1">
                <label>Salary</label>
                <input type="text" class="form-control" v-model="modal.SALARY" />
                <span v-show="errors">{{errors}}</span>
              </div>
              <div class="md-form mb-1">
                <label>Departmane Name</label>
                <input type="text" class="form-control" v-model="modal.DEPARTMENT_NAME" />
                <span v-show="errors">{{errors}}</span>
              </div>
              <button class="btn btn-sm btn-success" id="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <td>Employee ID</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Email</td>
          <td>Phone Number</td>
          <td>Salary</td>
          <td>Departmane Name</td>
          <td>Actions</td>
          <td>
            <div class="text-center">
              <a
                class="btn btn-success btn-rounded mb-4"
                href
                data-toggle="modal"
                data-target="#modalLoginForm"
              >Add</a>
            </div>
            <!-- <router-link class="nav-link btn btn-sm btn-primary" to="/department">Add</router-link> -->
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(emp, index) in employee">
          <td>{{emp.EMPLOYEE_ID}}</td>
          <td>{{emp.FIRST_NAME}}</td>
          <td>{{emp.LAST_NAME}}</td>
          <td>{{emp.EMAIL}}</td>
          <td>{{emp.PHONE_NUMBER}}</td>
          <td>{{emp.SALARY}}</td>
          <td>{{emp.DEPARTMENT_NAME}}</td>
          <td>
            <button class="btn btn-sm btn-success" v-on:click="editItem(index)">Edit</button>

            <button class="btn btn-sm btn-danger" v-on:click="deleteItem(index) ">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal: {},
      errors: "",
      employee: [
        {
          EMPLOYEE_ID: 1,
          FIRST_NAME: "Talha",
          LAST_NAME: "Zahid",
          EMAIL: "abc@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 30000,
          DEPARTMENT_NAME: "COMPUTER SCIENCE"
        },
        {
          EMPLOYEE_ID: 2,
          FIRST_NAME: "Ali",
          LAST_NAME: "Hamza",
          EMAIL: "abc1@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 20000,
          DEPARTMENT_NAME: "PHYSICS"
        },
        {
          EMPLOYEE_ID: 3,
          FIRST_NAME: "Usman",
          LAST_NAME: "Mubarik",
          EMAIL: "abc2@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 10000,
          DEPARTMENT_NAME: "CHEMSITRY"
        },
        {
          EMPLOYEE_ID: 4,
          FIRST_NAME: "Muneeb",
          LAST_NAME: "Ahmed",
          EMAIL: "abc3@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 40000,
          DEPARTMENT_NAME: "BIOLOGY"
        },
        {
          EMPLOYEE_ID: 5,
          FIRST_NAME: "Kashif",
          LAST_NAME: "Hussain",
          EMAIL: "abc4@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 40000,
          DEPARTMENT_NAME: "IT"
        },
        {
          EMPLOYEE_ID: 6,
          FIRST_NAME: "Hamza",
          LAST_NAME: "Khan",
          EMAIL: "abc5@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 10000,
          DEPARTMENT_NAME: "SOFTWARE ENGINEERING"
        },
        {
          EMPLOYEE_ID: 7,
          FIRST_NAME: "Usman",
          LAST_NAME: "Mubarik",
          EMAIL: "abc6@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 10000,
          DEPARTMENT_NAME: "MICROBILOGY"
        },
        {
          EMPLOYEE_ID: 8,
          FIRST_NAME: "Usman",
          LAST_NAME: "Minhas",
          EMAIL: "abc7@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 90000,
          DEPARTMENT_NAME: "BOTANY"
        },
        {
          EMPLOYEE_ID: 9,
          FIRST_NAME: "Ali",
          LAST_NAME: "Raza",
          EMAIL: "abc8@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 60000,
          DEPARTMENT_NAME: "ENGLISH"
        },
        {
          EMPLOYEE_ID: 10,
          FIRST_NAME: "Mubashir",
          LAST_NAME: "Ahmed",
          EMAIL: "abc9@gmail",
          PHONE_NUMBER: 123456,
          SALARY: 50000,
          DEPARTMENT_NAME: "URDU"
        }
      ]
    };
  },
  methods: {
    addItem(event) {
      if (
        this.modal.EMPLOYEE_ID == null ||
        this.modal.FIRST_NAME == null ||
        this.modal.LAST_NAME == null ||
        this.modal.EMAIL == null ||
        this.modal.PHONE_NUMBER == null ||
        this.modal.SALARY == null ||
        this.modal.DEPARTMENT_NAME == null
      ) {
        this.errors = "This field cannot be empty";
      } else {
        this.errors = "";
        var newObject = {
          EMPLOYEE_ID: this.modal.EMPLOYEE_ID,
          FIRST_NAME: this.modal.FIRST_NAME,
          LAST_NAME: this.modal.LAST_NAME,
          EMAIL: this.modal.EMAIL,
          PHONE_NUMBER: this.modal.PHONE_NUMBER,
          SALARY: this.modal.SALARY,
          DEPARTMENT_NAME: this.modal.DEPARTMENT_NAME
        };
        this.employee.push(newObject);
        // $("#modalLoginForm").modal("toggle");
        document.getElementById("#modalLoginForm").modal("toggle");
      }
    },
    deleteItem(index) {
      this.employee.splice(index, 1);
    },
    editItem(index) {
      this.employee[index].EMPLOYEE_ID = "400";
      this.employee[index].FIRST_NAME = "Usman";
      this.employee[index].LAST_NAME = "ALI";
      this.employee[index].EMAIL = "ALI@gmail.com";
      this.employee[index].PHONE_NUMBER = "123456";
      this.employee[index].SALARY = "200000";
      this.employee[index].DEPARTMENT_NAME = "Computer Science";
    }
  }
};
</script>
<style scoped>
</style>
