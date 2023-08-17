<!-- TodoItem.vue -->
<template>
  <div class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="toggleTodo" />
    <span :style="{ 'text-decoration': todo.completed ? 'line-through' : 'none' }">{{ todo.text }}</span>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    toggleTodo() {
      this.$emit('toggle', this.todo.id, !this.todo.completed);
    },
  },
};
</script>

<style>
.todo-item {
  margin: 5px 0;
  display: flex;
  align-items: center;
}
</style>
