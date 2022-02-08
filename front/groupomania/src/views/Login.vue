<template>
  <div class="login">
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
