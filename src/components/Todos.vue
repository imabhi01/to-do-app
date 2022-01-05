<template>
    <div>
        <h1>List of Todos</h1>
        <div class="todos">
            <ul>
                <div v-for="todo in allTodos" :key="todo.id" class="todo">
                    <li>{{ todo.id }}. {{ todo.title }}</li>
                    <i class="fas fa-trash" @click="deleteTodo(todo.id)"></i>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Todos",
    computed:mapGetters(['allTodos']),
    methods:{
        ...mapActions(['fetchTodos', 'deleteTodo'])
    },
    created(){
        this.fetchTodos()
    }
    
}
</script>

<style>

.todos{
    display:inline-flex;
    grid-gap: 1rem;  
}

.todo {
    cursor: pointer;
    border: 1px solid #ccc;
    background: aquamarine;
    padding: 1rem;
    margin: 1rem;
    border-radius: 15px;
}
li{
    list-style-type: none;
}
</style>