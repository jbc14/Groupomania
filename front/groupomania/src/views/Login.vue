<template>
  <div class="login">
    <div id="nav">
      <router-link to="/">Se connecter</router-link> |
      <router-link to="/signup">Créer un compte</router-link>
    </div>
    <router-view />
    <LoginForm />
  </div>
</template>

<script>
  // @ is an alias to /src
  import LoginForm from '@/components/LoginForm.vue';

  export default {
    name: 'Login',
    components: {
      LoginForm,
    },
  };
</script>

<style scoped>
  .login {
    background-color: #ffd7d7;
    padding: 20px;
  }
</style>
