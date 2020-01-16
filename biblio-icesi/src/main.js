import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Biblio from './components/Biblio.vue'
import Home from './components/Home.vue'
import CreateBook from './components/CreateBook.vue'
import Users from './components/Users.vue'
import CreateUser from './components/CreateUser.vue'
import BookDetails from './components/BookDetails.vue'
import LoanDetails from './components/LoanDetails.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/library', component: Biblio},
  {path: '/create-book', component: CreateBook},
  {path: '/users', component: Users},
  {path: '/create-user', component: CreateUser},
  {path: '/book/:bookId', component: BookDetails, params: true},
  {path: '/loan/:bookId/:userId', component: LoanDetails, params: true}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
