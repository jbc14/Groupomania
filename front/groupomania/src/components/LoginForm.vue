<template>
  <div class="login__form">
    <input type="email" placeholder="Email" />
    <input type="text" placeholder="Mot de passe" />
    <button>Se connecter</button>
  </div>
</template>

<script>
  export default {
    name: 'LoginForm',
  };
</script>

<style scoped>
  .login__form {
    background-color: #ffd7d7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
  }

  input {
    width: 200px;
    height: 30px;
    border-radius: 10px;
    border-style: none;
  }

  input:focus {
    border-style: none;
  }

  button {
    background-color: #fd2d01;
    color: white;
    width: 150px;
    height: 25px;
    border-radius: 15px;
    border-style: none;
    margin: 20px auto;
  }

  button:hover {
    filter: brightness(200%);
  }
</style>
