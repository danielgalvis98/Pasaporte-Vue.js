<template>
    <div id="create-user">
        <br>
        <br>
        <label>First Name</label>
        <input v-model="name" />
        <br>
        <label>Last Name</label>
        <input v-model="apellido" />
        <br>
        <br>
        <button @click="saveUser">Guardar</button>
    </div>
</template>

<script>
import DB from '../DB.js';
export default {
    
    name: 'create-user',
    data (){
        return {
            name: '',
            apellido: ''
        }
    },
    methods: {
        saveUser (){
            if (this.name === ''){
                alert('Name is required');
                return;
            }
            if (this.apellido===''){
                alert('Author is required');
                return;
            }
            const user = {
                id: Math.random(),
                name: this.name,
                apellido: this.apellido
            }
            DB.saveUser(user);
            this.name = '';
            this.apellido = '';
            alert('User Created Succesfully');
        }
    }
}
</script>

<style>
#create-book{}
</style>