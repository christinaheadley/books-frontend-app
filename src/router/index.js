import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import axios from "axios";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import BooksIndex from "../views/BooksIndex.vue";
import BooksNew from "../views/BooksNew.vue";
import BooksShow from "../views/BooksShow.vue";
import BooksEdit from "../views/BooksEdit.vue";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/books", name: "books-index", component: BooksIndex },
  { path: "/books/new", name: "books-new", component: BooksNew },
  { path: "/books/:id", name: "books-show", component: BooksShow },
  { path: "/books/:id/edit", name: "books-edit", component: BooksEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
