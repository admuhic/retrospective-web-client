<template>
  <nav class="navbar navbar-expand-lg shadow fixed-top bg-navbar">
    <div class="container">
      <a class="navbar-brand text-white" href="/home">Retrospective</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link text-white" href="/retrospective"
              >Retrospective stuff</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/settings">Settings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/sign-in">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" role="button" @click="signOut()"
              >Sign Out</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/register">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { signOutUser } from "../../services/firebase.service";

export default {
  name: "TheNavbar",
  data() {
    return {};
  },
  methods: {
    signOut() {
      signOutUser();
    },
  },
};
</script>

<style scoped lang="scss">
.bg-navbar {
  background-color: $bg-purple;
}
</style>
