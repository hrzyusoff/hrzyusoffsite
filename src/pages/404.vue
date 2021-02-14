<template>
  <div class="container error-page-container">
    <div class="error-main">
      <p class="error-code has-text-weight-bold">404</p>
      <p class="error-desc">Page not found</p>
    </div>
    <div class="error-actions">
      <a class="button is-rounded is-warning error-desc-btn" href="/">
        <span class="arrow"><font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" /></span>
        <span class="text has-text-weight-bold">Let's go home</span>
      </a>
    </div>
  </div>
</template>

<script>
// import font awesome icons used in this component
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

// init icon
library.add(faLongArrowAltLeft);
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

  .error-main {
    margin-bottom: 30px;
    line-height: 1;
  }

  .error-code {
    font-size: 82px;
    color: #f1c40f;
    margin-bottom: 12px;
  }

  .error-actions {
    text-align: center;
  }

  .error-desc {
    font-size: 20px;
    text-align: center;
  }

  .error-desc-btn {
    color: #2c3e50;
    padding: 32px 40px;

    .arrow {
      margin-right: 8px;
      opacity: 0;
    }

    // 8px translate to the left as replacement to margin right
    .text {
      transform: translateX(-8px);
    }

    &:hover {
      background-color: #f1c40f;

      .arrow {
        opacity: 1;
      }

      .text {
        transform: translateX(0);
      }
    }
  }
}
</style>
