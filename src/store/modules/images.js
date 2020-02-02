import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState }) {    // rootState lets us grab state from other vuex modules like auth.js that has been imported inside index.js vuex store
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        console.log(response);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};