<template>
  <div class="note" v-if="isTitleMatching">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <button @click="handleDelete">delete</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    content: String,
    id: Number,
    searchQuery: String, // Receive the search query from the parent component
  },
  computed: {
    isTitleMatching() {
      // Check if the title contains the search query (case-insensitive)
      return this.title.toLowerCase().includes(this.searchQuery.toLowerCase());
    },
  },
  methods: {
    handleDelete() {
      this.$emit("delete", this.id);
    },
  },
});
</script>

<style>
/* Add your CSS styles here, if needed */
</style>
