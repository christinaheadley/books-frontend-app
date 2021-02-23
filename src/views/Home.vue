<template>
  <div class="home">
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";

export default {
  data: function() {
    return {
      books: [],
      errors: [],
    };
  },

  // createBook: function() {
  //   var params = {
  //     genre: this.newGenre,
  //     author: this.newAuthor,
  //     title: this.newTitle,
  //   };
  //   axios
  //     .post("/api/books", params)
  //     .then(response => {
  //       console.log(response.data);
  //       this.books.push(response.data);
  //     })
  //     .catch(error => {
  //       this.errors = error.response.data.errors;
  //     });
  // },
};
</script>
