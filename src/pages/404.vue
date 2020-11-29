<template>
  <div class="container error-page-container">
    <img src="../assets/error2.svg" alt="Moon and stars for page not found" />
    <div class="error-main">
      <p class="error-code has-text-weight-bold">404</p>
      <p class="error-desc">Page not found</p>
    </div>
    <div class="error-actions">
      <p class="error-desc-opt">Uh-oh, the page you are looking for doesn't exist.</p>
      <a class="button is-rounded is-warning error-desc-btn" href="/">Let's go home</a>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: '404 Page',
  },
};
</script>

<style lang="scss" scoped>
.error-page-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1,
  p {
    color: #f1c40f;
  }

  .error-code {
    font-size: 140px;
    color: #f1c40f;
  }

  img {
    width: 180px;
    margin-bottom: 24px;
  }

  .error-main {
    margin-bottom: 30px;
  }

  .error-code {
    font-size: 50px;
    line-height: 1;
  }

  .error-actions {
    text-align: center;
  }

  .error-desc {
    font-size: 12px;
  }

  .error-desc-btn {
    margin-top: 20px;
    color: #2c3e50;

    &:hover {
      background-color: #f1c40f;
    }
  }
}
</style>
