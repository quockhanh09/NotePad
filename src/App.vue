<template>
  <div class="APP">
    <Header />
    
    <router-view></router-view>
    <NewNote @onAdd="addNote" />
      <!-- <TodoList/> -->
    <Center />
   
    <Search />
    <Savenote />
    <Note
      v-for="(note, index) in notes"
      :key="index"
      :id="index"
      :title="note.title"
      :content="note.content"
      @onDelete="deleteNote"
    />
    <Footer />
  </div>
</template>

<script>
import { reactive } from 'vue'
import Header from './components/Header.vue'
import NewNote from './components/NewNote.vue'
import Note from './components/Note.vue'
import Footer from './components/Footer.vue'
import Search from './components/Search.vue'
import Center from './components/Center.vue'
import TodoList from './components/TodoList.vue'
import Savenote from './components/Savenote.vue'
// import From from './components/From.vue'

export default {
  components: {
    Header,
    NewNote,
    TodoList,
    Center,
   
    Search,
    Savenote,
    Note,
    // TodoList,
    Savenote,
    Footer
  },
  setup() {
    const state = reactive({
      notes: []
    })

    const addNote = (note) => {
      state.notes.push(note)
    }

    const deleteNote = (id) => {
      state.notes.splice(id, 1)
    }

    return {
      notes: state.notes,
      addNote,
      deleteNote
    }
  }
}
</script>
<style scoped>
/* .APP{
      height: 2000px;
} */
</style>
