const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => {
        return !!state.token // !! will return true or false if the value is null or not
    }

};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};