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
    }
};

const mutations = {
    setTodos: (state, todos) => state.todos = todos 
};

export default {
    state,
    getters,
    actions,
    mutations
}