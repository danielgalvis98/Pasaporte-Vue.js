import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Biblio from './components/Biblio.vue'
import Home from './components/Home.vue'
import CreateBook from './components/CreateBook.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/library', component: Biblio},
  {path: '/create-book', component: CreateBook}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
