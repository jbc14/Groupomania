<template>
  <div>
    <div class="timeline-post">
      <div class="timeline-post-content">
        <img v-if="post.imageUrl" :src="post.imageUrl" />
        <p v-if="!updateMode">{{ post.text }}</p>
        <input v-else id="modified-text" type="text" v-model="post.text" />
      </div>
      <div class="timeline-post-info">
        <div class="likes">
          <img src="../assets/like.png" alt="" srcset="" />
          <img src="../assets/dislike.png" alt="" srcset="" />
        </div>
        <button
          v-if="isUserAllowed(post) && !updateMode"
          @click="modify(post)"
          id="modify-post"
        >
          Modifier
        </button>
        <button
          v-if="isUserAllowed(post) && updateMode"
          @click="update(post)"
          id="update-post"
        >
          Enregistrer
        </button>
        <button
          v-if="isUserAllowed(post)"
          v-on:click="deleteThisPost(post)"
          class="delete-post-btn"
        >
          Supprimer
        </button>
        <div class="post-user-info">
          <p>Posté par {{ post.createur.pseudo }}</p>
          <img class="timeline-post-info-pp" src="../assets/random_user.webp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    data() {
      return {
        updateMode: false,
      };
    },
    props: {
      post: {},
    },
    methods: {
      deleteThisPost() {
        this.$emit('delete', this.post);
      },
      modify() {
        this.updateMode = !this.updateMode;
      },
      update() {
        this.$emit('update', this.post);
        this.updateMode = !this.updateMode;
      },
      isUserAllowed(post) {
        if (post.createurId == localStorage.getItem('userId')) {
          return true;
        }
        return false;
      },
    },
  };
</script>

<style scoped>
  .timeline-post {
    width: 100%;
    height: auto;
    margin-bottom: 50px;
    min-width: 450px;
  }

  .timeline-post-content {
    background-color: white;
    padding: 10px;
    display: flex;
    column-gap: 10px;
    border-radius: 10px;
  }

  .timeline-post img {
    width: 200px;
    height: auto;
  }

  .timeline-post-info {
    margin-top: 5px;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
  }

  .post-user-info img {
    height: 30px;
    width: auto;
    border-radius: 50px;
    border: solid black 1px;
    margin: auto;
    cursor: pointer;
  }

  .post-user-info {
    display: flex;
    column-gap: 10px;
  }

  .likes {
    justify-content: flex-start;
    align-items: center;
    align-content: center;
  }

  .likes img {
    height: 20px;
    width: auto;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 8px;
    cursor: pointer;
  }

  button {
    margin-top: 5px;
    background-color: #fd2d01;
    color: white;
    width: 80px;
    height: 25px;
    border-radius: 15px;
    border-style: none;
    cursor: pointer;
  }
</style>
