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

export default {

  name: 'biblio',
  components: {
      book: Book
  },
  data (){
      return {
          books: JSON.parse(localStorage.getItem('books'))
      }
  },
  methods: {
      deleteBook(bookId) {
          alert(bookId);
          this.books = this.books.filter(book => book.id !== bookId);
          localStorage.setItem('books', JSON.stringify(this.books));
      }
  }
}
</script>

<style>


</style>