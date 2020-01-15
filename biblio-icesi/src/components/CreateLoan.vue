<template>
    <div id="create-loan">
        <br>
        <br>
        <label>User</label>
        <select v-model="userId">
            <option v-bind:key="user.id"
            v-for="user in users"
            v-bind:value="user.id">{{ user.name }}</option>
        </select>
        <br>
        <br>
        <button @click="saveLoan">Prestar</button>
        <br>
    </div>
</template>

<script>
import DB from '../DB.js';
export default {
    
    name: 'create-loan',
    props: ['bookId'],
    data (){
        return {
            userId: '',
            users: DB.getUsers(),
        }
    },
    methods: {
        saveLoan (){
           if (this.userId === ''){
               alert('User is required');
               return;
           }
           const loan = {
               id: Math.random(),
               userId: this.userId,
               bookId: this.bookId
           }

           DB.saveLoan(loan);
           this.userId = "";
           alert('Loan created succesfully');
        }
    }
}
</script>

<style>
#create-book{}
</style>