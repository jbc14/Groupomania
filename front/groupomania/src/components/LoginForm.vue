<template>
  <div class="login__form">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="text" placeholder="Mot de passe" />
    <button @click="logIn()">Se connecter</button>
  </div>
</template>

<script>
  export default {
    name: 'LoginForm',
    data: function () {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      logIn: function () {
        fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then(() => {
            this.$router.push('/posts');
          })
          .catch((error) => {
            error;
          });
      },
    },
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
    cursor: pointer;
  }

  button:hover {
    filter: brightness(200%);
  }
</style>
