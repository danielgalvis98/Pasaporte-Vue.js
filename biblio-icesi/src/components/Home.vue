<template>
    <div id="home">
        <router-link to="/library"> Library </router-link>
        <br>
        <router-link to="/create-book"> Create Book </router-link>
        <br>
        <router-link to="/users"> Users </router-link>
        <br>
        <router-link to="/create-user"> Create User </router-link>
        <br>
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