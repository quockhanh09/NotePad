<template>
  <div>
    <form class="create-note" @submit.prevent="handleSubmit">
      <input v-model="note.title" name="title" placeholder="Note title" />

      <div className="note-input__body__buttons">
        <button @click="handleToggle">
          Plain Text Note <i class="fa-solid fa-caret-down"></i>
        </button>
        <button><i class="fa-solid fa-file-arrow-up "></i> Import Word/Pdf</button>
        <button class="button-share"><i class="fa-solid fa-share-nodes"></i>  Share</button>
      </div>
      <div v-if="!showTodoList && !showPlain">
        <textarea v-model="note.content" name="content" placeholder="Note Content" rows="2" />
      </div>
      <div v-else-if="showTodoList">
        <TodoList @addTodo="addTodo" />
      </div>
      <button class="add-button" type="submit">Save</button>
      <label class="link-lockopen"><i class="fa-solid fa-unlock-keyhole fa-flip-horizontal"></i> Public Note (<a href="/registerLogin" class="register" tabindex="4">Register</a> for private notes)</label>

      <div v-if="showPlain" class="plain-options">
        <button @click="toggleNoteTextarea">Plain Text Note</button>
        <button>Rich Text Note</button>
        <button @click="toggleTodoList">Task List</button>
      </div>
    </form>

    <!-- Display the notes -->
    <div v-for="(note, index) in notes" :key="index">
      <h3>{{ note.title }}</h3>
      <p>{{ note.content }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import './styles/style.css'
import TodoList from './TodoList.vue'
export default {
  components: {
    TodoList
  },

  data() {
    return {
      showPlain: false,
      showTodoList: false,
      note: { title: '', content: '' },
    };
  },

  methods: {
    handleToggle() {
      this.showPlain = !this.showPlain;
    },
    toggleTodoList() {
      this.showTodoList = !this.showTodoList;
    },
    toggleNoteTextarea() {
      this.showTodoList = false;
      this.showPlain = false;
    },
    addTodo(newTodo) {
      this.note.content += `- [ ] ${newTodo}\n`;
      this.showTodoList = false;
    },
  },

  setup(props, context) {
    const notes = ref([]) // Create a ref to store the notes

    const note = ref({ title: '', content: '' })

    const handleChange = (e) => {
      const { name, value } = e.target
      note.value = {
        ...note.value,
        [name]: value
      }
    }

    const handleSubmit = () => {
      // Add the note to the notes array
      notes.value.push({ ...note.value })

      context.emit('add', note.value)
      note.value = { title: '', content: '' }
    }

    return {
      notes,
      note,
      handleChange,
      handleSubmit
    }
  }
}
</script>


<style scoped>

.fa-unlock-keyhole{
  color:gray;
}

.fa-share-nodes{
  color: grey;
  
}


form input{
  width: 800px;
  padding: 4px;
  height: 34px;
  font-size: 1.0em;
  font-family: inherit;
  resize: none;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: inset 2px 2px 2px rgba(33, 33, 33, 0.3);

}


form textarea {
  width: 100%;
  height: 400px;
  padding: 4px;
  font-size: 1.0em;
  font-family: inherit;
  resize: none;
  border-radius: 4px;
  box-shadow: inset 2px 2px 4px rgba(33, 33, 33, 0.3);
}

form input:focus{
  border-color: #66afe9;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
}


form textarea:focus {
  border-color: #66afe9;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
}

</style>
