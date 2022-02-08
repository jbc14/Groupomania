<template>
  <div class="signup">
    <div id="nav">
      <router-link to="/">Se connecter</router-link> |
      <router-link to="/signup">Créer un compte</router-link>
    </div>
    <router-view />
    <SignUpForm />
  </div>
</template>

<script>
  // @ is an alias to /src
  import SignUpForm from '@/components/SignUpForm.vue';

  export default {
    name: 'SignUp',
    components: {
      SignUpForm,
    },
  };
</script>

<style scoped>
  .signup {
    background-color: #ffd7d7;
    padding: 20px;
  }
</style>
