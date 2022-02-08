<template>
  <img id="logo" alt="Groupomania Logo" src="./assets/logos/logo.png" />
  <router-view />
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: white;
  }

  #logo {
    margin-top: 20px;
    width: 500px;
    max-width: 80%;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: black;
  }

  #nav a.router-link-exact-active {
    color: #fd2d01;
  }
</style>
