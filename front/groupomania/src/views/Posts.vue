<template>
  <div class="posts">
    <div class="new-post-container">
      <input placeholder="Quoi de neuf ?" type="text" id="new-post" />
      <div class="new-post-btns">
        <button class="add-image-btn">Ajouter une image</button>
        <button class="send-new-post">Poster</button>
      </div>
    </div>
    <div class="timeline">
      <div class="timeline-post">
        <div class="timeline-post-content">
          <img src="../assets/random_img.jpg" />
          <p>Mon nouveau post incroyable !</p>
        </div>
        <div class="timeline-post-info">
          <div class="likes">
            <img src="../assets/like.png" alt="" srcset="" />
            <img src="../assets/dislike.png" alt="" srcset="" />
          </div>
          <div class="post-user-info">
            <p>Posté par Jb le 05/02/2022</p>
            <img
              class="timeline-post-info-pp"
              src="../assets/random_user.webp"
            />
          </div>
        </div>
      </div>

      <div class="timeline-post">
        <div class="timeline-post-content">
          <img src="../assets/random_img2.jpg" />
          <p>Mon nouveau post incroyable !</p>
        </div>
        <div class="timeline-post-info">
          <div class="likes">
            <img src="../assets/like.png" alt="" srcset="" />
            <img src="../assets/dislike.png" alt="" srcset="" />
          </div>
          <div class="post-user-info">
            <p>Posté par Jb le 05/02/2022</p>
            <img
              class="timeline-post-info-pp"
              src="../assets/random_user.webp"
            />
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'Posts',
  };
</script>

<style scoped>
  .posts {
    background-color: #ffd7d7;
    padding: 20px;
    width: 80%;
    border-radius: 20px;
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
  }

  .timeline {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .timeline-post {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
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
  }
</style>
