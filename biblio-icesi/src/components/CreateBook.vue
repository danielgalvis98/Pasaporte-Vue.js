<template>
    <div id="create-book">
        <br>
        <br>
        <label>Name</label>
        <input v-model="name" />
        <br>
        <label>Author</label>
        <input v-model="author" />
        <br>
        <br>
        <button @click="saveBook">Guardar</button>
    </div>
</template>

<script>
import DB from '../DB.js';
export default {
    
    name: 'create-book',
    data (){
        return {
            name: '',
            author: ''
        }
    },
    methods: {
        saveBook (){
            if (this.name === ''){
                alert('Name is required');
                return;
            }
            if (this.author===''){
                alert('Author is required');
                return;
            }
            const book = {
                id: Math.random(),
                name: this.name,
                author: this.author
            }
            DB.saveBook(book);
            this.name = '';
            this.author = '';
            alert('Book Created Succesfully');
        }
    }
}
</script>

<style>
#create-book{}
</style>