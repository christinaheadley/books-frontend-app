<template>
  <div class="books-edit">
    <form v-on:submit.prevent="updateBook()">
      <h1>Edit Book</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="book.title" />
      </div>
      <div class="form-group">
        <label>Author:</label>
        <input type="text" class="form-control" v-model="book.author" />
      </div>
      <div class="form-group">
        <label>Genre</label>
        <input type="text" class="form-control" v-model="book.genre" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      book: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/books/${this.$route.params.id}`).then(response => {
      this.book = response.data;
      console.log(this.book);
    });
  },

  methods: {
    updateBook: function() {
      var params = {
        genre: this.book.genre,
        author: this.book.author,
        title: this.book.title,
      };
      axios
        .patch(`/api/books/${this.book.id}`, params)
        .then(response => {
          console.log(response.data);
          this.$router.push(`/books/${this.book.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
