import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import ExampleComponent from './components/ExampleComponent'
import DepartmentComponent from './components/DepartmentComponent'
Vue.use(Router)

export default new Router({
    routes:
        [
            { path: '/', name: 'Home', component: Home },
            { path: '/employee', name: 'ExampleComponent', component: ExampleComponent },
            { path: '/department', name: 'DepartmentComponent', component: DepartmentComponent }
        ]
})

