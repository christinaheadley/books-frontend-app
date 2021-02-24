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
      newGenre: "",
      newAuthor: "",
      newTitle: "",
      errors: [],
    };
  },
  methods: {
    createBook: function() {
      var params = {
        genre: this.newGenre,
        author: this.newAuthor,
        title: this.newTitle,
      };
      axios
        .post("/api/books", params)
        .then(response => {
          console.log(response.data);
          this.books.push(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
