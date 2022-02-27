<template>
  <div class="timeline-post">
    <div class="timeline-post-content">
      <img v-if="post.imageUrl" :src="post.imageUrl" />
      <p class="post-text" v-if="!updateMode">{{ post.text }}</p>
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
        <span class="button-text">Modifier</span>
        <span class="material-icons"> edit </span>
      </button>
      <button
        v-if="isUserAllowed(post) && updateMode"
        @click="update(post)"
        id="update-post"
      >
        <span class="button-text">Enregistrer</span>
        <span class="material-icons"> save </span>
      </button>
      <button
        v-if="isUserAllowed(post) && !updateMode"
        v-on:click="deleteThisPost(post)"
        class="delete-post-btn"
      >
        <span class="button-text">Supprimer</span>
        <span class="material-icons"> delete </span>
      </button>
      <button
        v-if="isUserAllowed(post) && updateMode"
        v-on:click="modify(post)"
        class="cancel-post-btn"
      >
        <span class="button-text">Annuler</span>
        <span class="material-icons"> cancel </span>
      </button>
      <div class="post-user-info">
        <p>Posté par {{ post.createur.pseudo }}</p>
        <img class="timeline-post-info-pp" src="../assets/random_user.webp" />
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
    width: 65%;
    height: auto;
    margin-bottom: 50px;
    min-width: 250px;
  }

  .timeline-post-content {
    background-color: white;
    padding: 10px;
    display: flex;
    column-gap: 10px;
    border-radius: 10px;
    word-wrap: break-word;
  }

  .post-text {
    overflow: auto;
  }

  .timeline-post-content img {
    width: 150px;
    height: auto;
    border-radius: 10px;
  }

  #modified-text {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border-style: none;
    margin-bottom: 10px;
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

  .material-icons {
    display: none;
  }

  @media (max-width: 700px) {
    .timeline-post {
      width: 90%;
    }

    .timeline-post-content img {
      width: 100px;
      height: auto;
    }
    button {
      margin-top: 5px;
      background-color: #fd2d01;
      color: white;
      width: 50px;
      height: 25px;
      border-radius: 15px;
      border-style: none;
      cursor: pointer;
    }
    .material-icons {
      display: block;
    }
    .button-text {
      display: none;
    }
  }
</style>
