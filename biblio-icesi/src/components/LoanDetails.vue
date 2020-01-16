<template>
    <div id="loanDetails">
        <h1>Loan:</h1>
        <ul>
            User: <user :userData="user"/>
            Book: <book :bookData="book"/>
        </ul>
    </div>
</template>

<script>
import DB from '../DB.js'
import Book from './Book.vue'
import User from './User.vue'

export default {
    name: "loanDetails",
    data (){
        return {
            loan: DB.getLoan(this.$route.params.userId, this.$route.params.bookId),
            book: DB.getBook(this.$route.params.bookId),
            user: DB.getUser(this.$route.params.userId),
        }
    },
    components: { 
        book: Book, 
        user: User, 
    },
    methods: {}
}
</script>