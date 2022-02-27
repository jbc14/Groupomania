<template>
  <div class="posts">
    <div @click="logout()" class="logout">
      <input type="button" value="Se déconnecter" />
      <img src="../assets/logout.png" alt="" srcset="" />
    </div>
    <input
      @click="deleteAccount()"
      type="button"
      value="Supprimer mon compte"
      class="delete-account"
      id="deleteAccount"
    />
    <form class="new-post-container">
      <div class="new-post-inputs">
        <div class="image-preview" id="imagePreview">
          <img
            class="image-preview__image"
            id="imagePreviewImage"
            src=""
            alt="Image Preview"
          />
        </div>
        <input
          placeholder="Quoi de neuf aujourd'hui ?"
          type="text"
          id="new-post"
          v-model="text"
        />
      </div>
      <div class="new-post-btns">
        <input
          @change="previewImage"
          id="file"
          type="file"
          class="add-image-btn"
          accept="image/png, image/gif, image/jpeg, image/jpeg"
        />
        <button @click="inputClick" type="button">
          <span class="button-text">Ajouter une image</span>
          <span class="material-icons"> image </span>
        </button>
        <button
          type="submit"
          @click.prevent="sendNewPost()"
          class="send-new-post"
        >
          <span class="button-text">Poster</span>
          <span class="material-icons"> send </span>
        </button>
      </div>
    </form>
    <div class="timeline">
      <Post
        v-for="post in allPosts"
        :key="post"
        :data-id="post._id"
        v-bind:post="post"
        @delete="deletePost"
        @update="updatePost"
      />
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
        const formData = new FormData();
        const file = document.getElementById('file');
        const userId = localStorage.getItem('userId');
        const text = this.text;

        formData.append('text', text);
        formData.append('image', file.files[0]);
        formData.append('userId', userId);

        fetch('http://localhost:3000/api/posts', {
          method: 'POST',
          body: formData,
        })
          .then((res) => res.json())
          .then(() => {
            console.log('Post enregistré');
            file.value = '';
            this.getAllPosts();
            this.previewImage();
          })
          .catch((err) => console.log(err));
      },
      updatePost(post) {
        const token = localStorage.getItem('token');
        fetch(`http://localhost:3000/api/posts/${post._id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            text: post.text,
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
      deletePost(post) {
        let answer = confirm('Etes-vous sûr(e) de vouloir supprimer ce post ?');
        if (answer) {
          const token = localStorage.getItem('token');
          fetch(`http://localhost:3000/api/posts/${post._id}`, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
            .then((res) => {
              res.json();
              this.getAllPosts();
            })
            .catch((error) => {
              error;
            });
        } else {
          this.getAllPosts();
        }
      },
      inputClick() {
        document.getElementById('file').click();
      },
      previewImage() {
        const inpFile = document.getElementById('file').files[0];
        const imagePreview = document.getElementById('imagePreviewImage');

        if (inpFile) {
          const reader = new FileReader();
          imagePreview.style.display = 'block';

          reader.addEventListener('load', () => {
            imagePreview.setAttribute('src', reader.result);
          });

          reader.readAsDataURL(inpFile);
        } else {
          imagePreview.style.display = 'none';
        }
      },
      deleteAccount() {
        let answer = confirm(
          'Etes-vous sûr(e) de vouloir supprimer votre compte ?'
        );
        if (answer) {
          fetch(`http://localhost:3000/api/auth/delete`, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: localStorage.getItem('userId'),
            }),
          })
            .then((res) => {
              res.json();
              localStorage.removeItem('userId');
              localStorage.removeItem('token');
              this.$router.push('/');
            })
            .catch((error) => {
              error;
            });
        } else {
          this.getAllPosts();
        }
      },
      logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.$router.push('/');
      },
    },
    beforeMount() {
      if (
        (!localStorage.getItem('userId') && !localStorage.getItem('token')) ||
        (localStorage.getItem('userId') == 'undefined' &&
          localStorage.getItem('token') == 'undefined')
      ) {
        this.$router.push('/');
      }
      this.getAllPosts();
    },
  };
</script>

<style scoped>
  .posts {
    background-color: #ffd7d7;
    padding: 20px;
    padding-top: 40px;
    width: 80%;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  .logout {
    position: absolute;
    top: 0px;
    right: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    column-gap: 5px;
    cursor: pointer;
    background-color: #fd2d01;
    color: white;
    width: 150px;
    height: 25px;
    border-radius: 0 15px 0 15px;
    border-style: none;
    cursor: pointer;
  }

  .delete-account {
    position: absolute;
    top: 0px;
    left: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    column-gap: 5px;
    cursor: pointer;
    background-color: #fd2d01;
    color: white;
    width: 150px;
    height: 25px;
    border-radius: 15px 0 15px 0;
    border-style: none;
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
  .new-post-inputs {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    min-width: 250px;
    width: 80%;
  }
  .image-preview {
    width: 120px;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .image-preview__image {
    display: none;
    width: 100%;
  }

  #new-post {
    width: 80%;
    height: 100px;
    border-radius: 10px;
    border-style: none;
    margin-bottom: 10px;
    overflow: auto;
    word-wrap: auto;
  }

  .new-post-btns {
    display: flex;
    column-gap: 100px;
  }

  button {
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

  .material-icons {
    display: none;
  }
  @media (max-width: 700px) {
    .new-post-container {
      width: 100%;
    }
    .new-post-inputs {
      width: 90%;
    }
    .posts {
      width: auto;
    }
    .new-post-btns {
      display: flex;
      column-gap: 20px;
    }
    .material-icons {
      display: block;
    }
    .button-text {
      display: none;
    }
    button {
      width: 60px;
      height: 25px;
    }
  }
</style>
