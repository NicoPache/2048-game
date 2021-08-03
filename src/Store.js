import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
       isPlaying:true,
       score:0,
       bestScore:0,
       combinedScore:0,
       squares:[],
    },
    actions: {
        cambiarTrue({commit},booleano){
            commit('cambiarFacil',booleano)
        },
       
    },
    mutations: {
      
        cambiarFacil(state,booleano) {
            state.dificultad = booleano
            state.colorCount = 6
        }, 
       
    }
})
