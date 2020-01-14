<template>
    <div id="home">
        <router-link to="/library"> Library </router-link>
        <br>
        <router-link to="/create-book"> Create Book </router-link>
        <h1> Home </h1>
    </div>
</template>

<script>

export default {

    name: 'home',
    data (){
        return {}
    },
    methods: {

    }
}
</script>