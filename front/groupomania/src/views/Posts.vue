<template>
  <div class="posts">
    <div @click="logout()" class="logout">
      <input type="button" value="Se déconnecter" />
      <img src="../assets/logout.png" alt="" srcset="" />
    </div>
    <div class="new-post-container">
      <input
        placeholder="Quoi de neuf aujourd'hui ?"
        type="text"
        id="new-post"
        v-model="text"
      />
      <div class="new-post-btns">
        <label for="file" class="label-file">Choisir une image</label>
        <input
          id="file"
          type="file"
          class="add-image-btn"
          accept="image/png, image/gif, image/jpeg"
        />
        <button @click="sendNewPost()" class="send-new-post">Poster</button>
      </div>
    </div>
    <div class="timeline">
      <Post v-for="post in allPosts" :key="post" :post="post" />
    </div>
  </div>
</template>

<script>
  import Post from '@/components/Post.vue';

  export default {
    name: 'Posts',
    data: function () {
      return {
        text: '',
        imageUrl: '',
        userId: localStorage.getItem('userId'),
        allPosts: [],
      };
    },
    components: {
      Post,
    },
    methods: {
      logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.$router.push('/');
      },
      getAllPosts() {
        fetch('http://localhost:3000/api/posts', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((posts) => {
            this.allPosts = posts;
          })
          .catch((error) => {
            error;
          });
      },
      sendNewPost() {
        fetch('http://localhost:3000/api/posts', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: this.text,
            imageUrl: '../assets/random_img.jpg',
            userId: this.userId,
          }),
        })
          .then((res) => {
            res.json();
            this.getAllPosts();
          })
          .catch((error) => {
            error;
          });
      },
    },
    beforeMount() {
      this.getAllPosts();
    },
  };
</script>

<style scoped>
  .posts {
    background-color: #ffd7d7;
    padding: 20px;
    width: 80%;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  .logout {
    position: absolute;
    top: -130px;
    right: -60px;
    display: flex;
    justify-content: center;
    align-content: center;
    column-gap: 5px;
    cursor: pointer;
  }

  .logout input {
    cursor: pointer;
    color: white;
    border-style: none;
    background: none;
  }

  .logout img {
    width: 15px;
    height: 15px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .new-post-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
  }

  #new-post {
    width: 80%;
    height: 100px;
    border-radius: 10px;
    border-style: none;
    margin-bottom: 10px;
  }

  .new-post-btns {
    display: flex;
    column-gap: 100px;
  }

  button,
  .label-file,
  .logout {
    background-color: #fd2d01;
    color: white;
    width: 150px;
    height: 25px;
    border-radius: 15px;
    border-style: none;
    cursor: pointer;
  }

  .add-image-btn {
    display: none;
  }

  .timeline {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
