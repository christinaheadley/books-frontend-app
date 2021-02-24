<template>
  <div class="books-new">
    <div>
      Title:
      <input type="text" v-model="title" />
      Author:
      <input type="text" v-model="author" />
      Genre:
      <input type="text" v-model="genre" />
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
      genre: "",
      author: "",
      title: "",
      errors: [],
    };
  },
  methods: {
    createBook: function() {
      var params = {
        genre: this.genre,
        author: this.author,
        title: this.title,
      };
      axios.post("/api/books", params).then(response => {
        console.log(response.data);
        this.$router.push("/books");
      });
      // .catch(error => {
      //   this.errors = error.response.data.errors;
      // });
    },
  },
};
</script>
