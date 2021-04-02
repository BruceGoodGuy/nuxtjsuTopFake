import axios from 'axios';
const endpoint = "https://laravel-utop-qa.azurewebsites.net/api/deal/static-info"; 
export const state = () => ({
    banner: [],
    cat: {}
})

// mutations
export const mutations = {
    fetch(state, data){
        state.cat = data.deal_categories;
        state.banner = data.deal_banner;
    }
}

// actions
export const actions = {
    async fetchCategory({commit}){
        const { data }  = await axios.get(endpoint)
        commit("fetch", data);
    }
}