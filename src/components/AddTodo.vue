<template>
    <div>
        <h3>Add Todo</h3>
        <form @submit="onSubmit">
            <input type="text" placeholder="Add Todo..." v-model="title">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Add-todo',
    data(){
        return {
            title : ''
        }
    },
    methods:{
        ...mapActions(["addTodo"]),
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title)
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
    }

    input[type="text"]{
        flex:10;
        padding:10px;
        border:1px solid #ccc;
        outline:0;
        margin-right:5px;
    }

    input[type="submit"]{
        flex:2;
        background: #41b883;
        color:#fff;
        border:1px solid #ccc;
        pointer:cursor;
    }
</style>