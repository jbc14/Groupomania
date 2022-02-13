<template>
  <div class="timeline-post">
    <div class="timeline-post-content">
      <img src="../assets/random_img2.jpg" />
      <p>Mon autre post incroyable !</p>
    </div>
    <div class="timeline-post-info">
      <div class="likes">
        <img src="../assets/like.png" alt="" srcset="" />
        <img src="../assets/dislike.png" alt="" srcset="" />
      </div>
      <div class="post-user-info">
        <p>Posté par Jb le 06/02/2022</p>
        <img class="timeline-post-info-pp" src="../assets/random_user.webp" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignUpForm',
    data: function () {
      return {
        pseudo: '',
        email: '',
        password: '',
      };
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
