import axios from 'axios'

const state = {
    todosArr: []
}

const getters = {
    allTodos : (state) => state.todosArr
}

const actions = {
    async fetchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit('setTodos', response.data)
    },
    async addTodo({ commit }, title){
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/posts', 
            { title, completed: false}
        )
        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        commit('removeTodo', id)
    },
    async filterTodos({ commit }, e){
        // get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        console.log(limit)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('filterTodo', response.data)
    }
}

const mutations = {
    setTodos : (state, todos) => (state.todosArr = todos),
    newTodo : (state, todo) => state.todosArr.unshift(todo),
    removeTodo: (state, id) => 
        state.todosArr = state.todosArr.filter(todo => todo.id !== id),
    filterTodo : (state, e) => state.todosArr = e
}

export default{
    state,
    getters,
    actions,
    mutations,

}
