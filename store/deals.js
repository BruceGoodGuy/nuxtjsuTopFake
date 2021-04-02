import axios from 'axios';
const endpoint = "https://laravel-utop-qa.azurewebsites.net/api/deal"; 
export const state = () => ({
    deals: {}
})

// mutations
export const mutations = {
    fetch(state, data){
        state.deals = data;
    }
}

// actions
export const actions = {
    async fetchDeals({commit}){
        const { data }  = await axios.get(endpoint)
        commit("fetch", data);
    }
}