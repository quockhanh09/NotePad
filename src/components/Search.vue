<template>
    <div class="note-search">
      <input
        type="text"
        placeholder="Search for notes..."
        @input="onSearchbarChange"
        v-model="searchQuery"
        
      />
      <button><i class="fa-solid fa-magnifying-glass"></i>Search</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "", // State to store the search query
      };
    },
    props: {
      onSearch: {
        type: Function,
        required: true,
      },
    },
    methods: {
      onSearchbarChange() {
        this.onSearch(this.searchQuery); // Pass the search query to the parent component
      },
    },
  };
  </script>
  
  <style>
  /* Add your CSS styles here, if needed */
  </style>
  