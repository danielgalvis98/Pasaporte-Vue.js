<template>
    <div>
        <li class="user"> 
            {{ userData.name }}
            <span>{{ userData.apellido }}</span>
            <button v-on:click="onDeleteUser(userData.id)">Delete</button>
            <p> Total Loans: {{ loans.length }} </p>
            <br>
            <ul> Loans: 
                <li :key="loan.id" v-for="loan in loans"> <router-link :to="'/loan/' + loan.bookId + '/' + loan.userId"> {{ loan.bookId }} </router-link> </li>
                
            </ul>
        </li>
    </div>
</template>

<script>
import DB from '../DB.js'

export default {
  name: 'user',
  props: ['userData', 'onDeleteUser'],
  data (){
      return {
        loans: DB.getLoansByUser(this.userData.id)
      }
  },
  methods: {
      
  }
}
</script>

<style>
    .user{
        list-style-type: none;
        text-align: left;
        border: 1px solid #000;
        margin: 5px 0px;
        padding: 5px;
        box-shadow: 1px 1px 1px 1px #ccc;
        background-color: #f3f3f3;
    }
    .user:hover{
        background-color: #d8d8d8;
        cursor: pointer; 
    }
    .user span{
        font-size: 10px;
        color: #4e4ca9;
    }
</style>