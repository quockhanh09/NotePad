<template>
  <div class="todo-list">
    <div class="input-group mb-3">
      <label for="">
      <input
        type="text"
        class="form-control"
        placeholder="Add New Task Here"
        v-model="newTodoText"
        @keyup.enter="addTodo"
      />
      <!-- <button class="btn btn-primary" @click="addTodo">Add</button> -->
    </label>
    </div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @toggle="toggleTodo" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [
        { id: 1, text: 'Learn ', completed: false },
        { id: 2, text: 'Build a note', completed: false },
        // Add more initial todos here
      ],
      newTodoText: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() === '') return;
      const newTodo = {
        id: Date.now(),
        text: this.newTodoText,
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTodoText = '';
    },
    toggleTodo(todoId) {
      const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
      }
    },
  },
};
</script>


<style scoped>

.todo-list{
  font-family: inherit;
  /* box-shadow:  0 0 8px rgba(102,175,233,.6); */
  background-color: #fff;
  padding: 6px 12px 6px 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 200px;
  
}

.input-group {
  display: flex;
  width: 100%;
  vertical-align: top;
  margin: 8px 5px;
  margin-bottom: 10px;
  resize: none;
  border-radius: 4px;
  position: relative;
  display: inline-block;
 
}


.form-control{
  width: 100%;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  padding-bottom: 5px; /* Khoảng cách của cạch dưới */
  transition: border-bottom-color 0.3s ease-in-out;
}

.form-control:focus {
  border-bottom-color: rgb(0, 0, 0); /* Màu của cạch dưới khi focus */
}

/* Optional: Add a placeholder effect */
.form-control::placeholder {
  color: #999;
}

/* Optional: Add animation when typing in the input */
.form-control:focus + .placeholder-effect::after {
  transform: scaleX(1);
}

.placeholder-effect::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px; /* Độ dày của cạch dưới */
  background-color: rgb(0, 0, 0); /* Màu của cạch dưới */
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}
</style>
