<template>
  <div class="home">
    <div>
      Title:
      <input type="text" v-model="newTitle" />
      Author:
      <input type="text" v-model="newAuthor" />
      Genre:
      <input type="text" v-model="newGenre" />
      <br />
      <button v-on:click="createBook()">Add New Book</button>
    </div>
    <h1>All the Books</h1>
    <div v-for="book in books" v-bind:key="book.id">
      <h2>Title:{{ book.title }}</h2>
      <h3>Author:{{ book.author }}</h3>
      <p>Genre:{{ book.genre }}</p>
      <button>More Info</button>
      <dialog></dialog>
      <button>Close</button>
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
      newGenre: "",
      newAuthor: "",
      newTitle: "",
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
    createBook: function() {
      var params = {
        genre: this.newGenre,
        author: this.newAuthor,
        title: this.newTitle,
      };
      axios.post("/api/books", params).then(response => {
        console.log(response.data);
        this.books.push(response.data);
      });
    },
  },
};
</script>
