<template>
    <div id="biblio">
        <h1> Biblioteca - Lista de libros </h1>
        <ul>
            <book v-for="book in books" :key="book.name" :bookData="book" :onDeleteBook="deleteBook"/>
        </ul>
    </div>
</template>

<script>
import Book from './Book.vue';
import DB from '../DB.js'

export default {

  name: 'biblio',
  components: {
      book: Book
  },
  data (){
      return {
          books: DB.getBooks()
      }
  },
  methods: {
      deleteBook(bookId) {
          DB.deleteBook(bookId);
          this.books = DB.getBooks();
      }
  }
}
</script>

<style>


</style>