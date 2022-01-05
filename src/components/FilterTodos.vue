<template>
    <div class="filters col-sm-2">
        <p>Filter Todos list</p>
        <select @change="filterTodos($event)" class="select-css">>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: "FilterTodos",
    data(){
        return {
            limit: 100
        }
    }, 
    methods: {
        ...mapActions(['filterTodos'])
    }

}
</script>


<style scoped>
    .select-css{
        display: block;
        font-size: 16px;
        font-family: sans-serif;
        font-weight: 700;
        color: #444;
        line-height: 1.3;
        padding: .6em 1.4em .5em .8em;
        width: 100%;
        max-width: 10%; /* useful when width is set to anything other than 100% */
        box-sizing: border-box;
        margin: 0;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
        border-radius: .5em;
        appearance: none;
        background-color: #fff;
    }
</style>