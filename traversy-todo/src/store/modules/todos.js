import axios from 'axios'

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {  // We do not call mutations directly, we call them with commit.
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        commit('setTodos', response.data);  // We use commit to call mutations and pass data
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
        commit('newTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo) 
};

export default {
    state,
    getters,
    actions,
    mutations
}