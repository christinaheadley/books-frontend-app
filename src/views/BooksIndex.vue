<template>
  <div class="books-index">
    <h1>All the Books</h1>
    <div v-for="book in books" v-bind:key="book.id">
      <h2>Title:{{ book.title }}</h2>
      <h3>Author:{{ book.author }}</h3>
      <p>Genre:{{ book.genre }}</p>

      <a v-bind:href="`/books/${book.id}`">more info</a>

      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      books: [],
      errors: [],
    };
  },
  created: function() {
    this.indexBooks();
  },
  methods: {
    indexBooks: function() {
      axios.get("/api/books").then(response => {
        console.log(response.data);
        this.books = response.data;
      });
    },
  },
};
</script>
