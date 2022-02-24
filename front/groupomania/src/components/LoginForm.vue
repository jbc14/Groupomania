<template>
  <div class="login__form">
    <input v-model="email" type="email" placeholder="Email" />
    <div class="password-container">
      <input
        id="password-input"
        v-model="password"
        type="password"
        placeholder="Mot de passe"
        v-on:keyup.enter="logIn"
      />
      <button @click="showPassword()" id="show-password">
        <img id="show-password-icon" src="../assets/open_eye.png" />
      </button>
    </div>

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
      logIn() {
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
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('token', data.token);
          })
          .then(() => {
            this.$router.push('/posts');
          })
          .catch((error) => {
            error;
          });
      },
      showPassword() {
        console.log('erreur');
        const passwordInput = document.getElementById('password-input');
        passwordInput.type =
          passwordInput.type === 'password' ? 'text' : 'password';
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

  .password-container {
    position: relative;
  }
  #show-password {
    width: 30px;
    display: flex;
    align-content: center;
    position: absolute;
    right: -45px;
    top: -15px;
    border-radius: 100px;
  }

  #show-password-icon {
    width: 20px;
    height: 20px;
    margin: auto;
  }
</style>
