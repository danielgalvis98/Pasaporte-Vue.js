<template>
    <div id="bookDetails">
        <ul>
            <li> Book ID: {{book.id}} </li>
            <li> Book Name: {{ book.name }}</li>
            <li>Book Author: {{ book.author }}</li>
        </ul>
    </div>
</template>

<script>
import DB from '../DB.js'
export default {
    name: "bookDetails",
    data (){
        return {
            book: DB.getBook(this.$route.params.bookId)
        }
    }
}
</script>