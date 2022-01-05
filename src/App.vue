<template>
  <div id="app">
    <div class="container">
       <Slider />
      <FilterTodos />
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import Slider from './components/Slider.vue'
import FilterTodos from './components/FilterTodos.vue'

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo,
    FilterTodos,
    Slider
  }
}
</script>

<style>
  body{
    background: #f5f5f5;
    line-height:1.6;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
  }

  .container{
    margin:auto;
    overflow:auto;
    padding:0 2rem;
    
  }
</style>
