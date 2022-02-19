<template>
  <div>
    <div :data-id="post._id" class="timeline-post">
      <div class="timeline-post-content">
        <img :src="post.imageUrl" />
        <p>{{ post.text }}</p>
      </div>
      <div class="timeline-post-info">
        <div class="likes">
          <img src="../assets/like.png" alt="" srcset="" />
          <img src="../assets/dislike.png" alt="" srcset="" />
        </div>
        <button @click="updatePost" id="update-post">Modifier</button>
        <button @click="deletePost" class="delete-post-btn">Supprimer</button>
        <div class="post-user-info">
          <p>Posté par {{ post.userId }}</p>
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
        post: {},
      };
    },
    methods: {
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
      deletePost() {
        const token = localStorage.getItem('token');
        fetch(`http://localhost:3000/api/posts/15`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            res.json();
            this.$emit('update-timeline');
          })
          .catch((error) => {
            error;
          });
      },
      updatePost() {
        const token = localStorage.getItem('token');
        fetch(`http://localhost:3000/api/posts/16`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            text: 'encore un nouveau texte',
            imageUrl: 'encore une nouvelle url',
          }),
        })
          .then((res) => {
            res.json();
            this.$emit('update-timeline');
          })
          .catch((error) => {
            error;
          });
      },
    },
  };
</script>

<style scoped>
  .timeline-post {
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }

  .timeline-post-content {
    background-color: white;
    padding: 10px;
    display: flex;
    column-gap: 10px;
    border-radius: 10px;
  }

  .timeline-post img {
    width: 100px;
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
</style>
