<template>
  <div class="signup__form">
    <input type="text" placeholder="prénom" />
    <input type="text" placeholder="nom" />
    <input type="text" placeholder="email" />
    <input type="text" placeholder="mot de passe" />
    <button>Se connecter</button>
  </div>
</template>

<script>
  export default {
    name: 'SignUp',
  };
</script>

<style scoped>
  .signup__form {
    background-color: #ffd7d7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    padding: 20px;
  
  
  }

  input {
    width: 200px;
    height: 30px;
    border-radius: 10px;
  }

  button {
    background-color: #fd2d01;
    color: white;
    width: 150px;
    height: 25px;
    border-radius: 15px;
    border-style: none;
  }

  button:hover {
    filter: brightness(200%);
  }
</style>
