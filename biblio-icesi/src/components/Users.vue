<template>
    <div id="users">
        <h1> Usuarios - Lista de usuarios </h1>
        <ul>
            <user v-for="user in users" :key="user.id" :userData="user" :onDeleteUser="deleteUser"/>
        </ul>
    </div>
</template>

<script>
import User from './User.vue'
import DB from '../DB.js'

export default {

  name: 'users',
  components: {
      user: User
  },
  data (){
      return {
          users: DB.getUsers()
      }
  },
  methods: {
      deleteUser(userId) {
          DB.deleteUser(userId);
          this.users = DB.getUsers();
      }
  }
}
</script>

<style>


</style>