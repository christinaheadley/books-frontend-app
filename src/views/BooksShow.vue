<template>
  <div class="books-show">
    <h1>Book Deets</h1>
    {{ book }}
    <!-- <div v-for="book in books" v-bind:key="book.id">
      <h2>Title:{{ book.title }}</h2>
      <h3>Author:{{ book.author }}</h3>
      <p>Genre:{{ book.genre }}</p> -->

    <!-- <ul> -->
    <!-- <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul> -->
    <!-- </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  name: "BooksIndex",
  data: function() {
    return {
      book: {},
    };
  },
  created: function() {
    this.showBook();
  },
  methods: {
    showBook: function() {
      axios.get(`/api/books/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.book = response.data;
      });
    },
  },
};
</script>
