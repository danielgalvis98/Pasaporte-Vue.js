<template>
    <div>
        <li class="user"> 
            {{ userData.name }}
            <span>{{ userData.apellido }}</span>
            <button v-on:click="onDeleteUser(userData.id)">Delete</button>
        </li>
    </div>
</template>

<script>

export default {
  name: 'user',
  props: ['userData', 'onDeleteUser'],
  data (){
      return {
          
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