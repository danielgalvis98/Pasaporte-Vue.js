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
            let books = JSON.parse(localStorage.getItem('books'));
            if(books === null) {
                books = [];
            }
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
            books.push(book);
            localStorage.setItem('books', JSON.stringify(books));
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