<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    
    <label> Add Todos - {{counter}}</label>
    <input v-model="todo">
    <button
      @click="addTodos(todo); increaseCounter()">
      Add todo
    </button>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo">
        {{ todo }}
      </li>
      <br>
    </ul>
  </div>
</template>

<script lang="js">
import { defineComponent, computed } from 'vue'
import { mapActions } from 'vuex'
import { useStore } from '../store'

export default defineComponent({
  setup() {
    const store = useStore()

    let todos = computed(() =>store.state.todos)
    let counter = computed(() => store.state.counter)
    return {
      todos,
      counter
    }
  },
  data() {
    return {
      todo: 'new todos',
    }
  },
  methods: {
    ...mapActions([
      'addTodos',
      'increaseCounter'
    ]),
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
