import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("task")) || [],
  },
  mutations: {
    ADTOLIST(state, task) {
      state.tasks.unshift(task);
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    DELETED(state, index) {
      state.tasks.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    UPDATECOMPLETED(state, index) {
      state.tasks[index].completed = !state.tasks[index].completed;
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
