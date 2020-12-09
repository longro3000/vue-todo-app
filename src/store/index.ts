import { InjectionKey, transformVNodeArgs } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// define your typings for the store state
export interface State {
  counter: number,
  todos: string[]
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()


export const store = createStore<State>({
  state: {
    counter: 2,
    todos: ['abcdef', 'defxyz']
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    add (state, payload) {
      state.todos = [...state.todos, payload]
    }
  },
  actions: {
    increaseCounter ({ commit }) {
      commit('increment')
    },
    addTodos ({ commit }, todo) {
      commit('add', todo)
    }
  },
  modules: {
  }
})

export function useStore () {
  return baseUseStore(key)
}

