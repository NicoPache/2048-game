import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      score: 0,
      highestScore: 0,
      addedScore: 0,
      isAdded: false,
    };
  },
  mutations: {
    incrementScore(state, value) {
      state.score += value;
    },
    setAddedScore(state, value) {
      state.addedScore = value;
    },
  },
  actions: {
    incrementScore({ commit }, value) {
      commit("incrementScore", value);
    },
    setAddedScore({ commit }, value) {
      commit("setAddedScore", value);
    },
  },
});

export default store;
