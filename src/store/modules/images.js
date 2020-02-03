import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) {    // rootState lets us grab state from other vuex modules like auth.js that has been imported inside index.js vuex store
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        // console.log(response);
        commit('setImages', response.data.data)
    },
    async uploadImages({ rootState }, images) {
        // console.log(images);
        // Get the access token
        const { token } = rootState.auth;
        // Call our API module to do the upload
        await api.uploadImages(images, token);
        // Redirect our user to image list component
        router.push('/');
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