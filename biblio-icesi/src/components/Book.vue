<template>
    <div class="book"> 
        <li> 
            {{ bookData.name }}
            <span>{{ bookData.author }}</span>
            <button v-on:click="onDeleteBook(bookData.id)">Delete</button>
        </li>

        <router-link :to="'/book/' + bookData.id"> View Details </router-link>
        <createLoan :bookId = bookData.id></createLoan>
    </div>
</template>

<script>
import CreateLoan from './CreateLoan'

export default {
  name: 'book',
  props: ['bookData', 'onDeleteBook'],
  data (){
      return {
          
      }
  },
  components: {
      createLoan: CreateLoan
  },
  methods: {
      
  }
}
</script>

<style>
    .book{
        list-style-type: none;
        text-align: left;
        border: 1px solid #000;
        margin: 5px 0px;
        padding: 5px;
        box-shadow: 1px 1px 1px 1px #ccc;
        background-color: #f3f3f3;
    }
    .book:hover{
        background-color: #d8d8d8;
        cursor: pointer; 
    }
    .book span{
        font-size: 10px;
        color: #4e4ca9;
    }
</style>