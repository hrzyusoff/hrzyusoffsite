<template>
  <Layout>
    <div class="container">
      <div class="header-wrapper">
        <button
          class="button mode-toggle"
          :class="{ 'is-dark-mode-bg': !isDarkMode }"
          @click="toggleDarkMode()"
          type="button"
        >
          <img src="@/assets/moon.svg" alt="Moon Icon" />
        </button>
      </div>
      <div class="content-wrapper">
        <div class="coming-soon-block">
          <h1 class="has-text-weight-bold" :class="{ 'is-dark-mode-text': !isDarkMode }">
            Coming Soon
          </h1>
          <div class="divider"></div>
        </div>
        <div class="title-block">
          <h1 class="has-text-weight-bold" :class="{ 'is-dark-mode-text': !isDarkMode }">
            <!-- EN -->
            <span class="quote-size">"&nbsp;</span>Rome wasn't built in a day, this website
            too...<span class="quote-size">&nbsp;"</span>
            <!-- MY -->
            <!-- <span class="quote-size">"&nbsp;</span>Rome tidak terbina dalam masa satu hari, begitu
            juga dengan website ini.<span class="quote-size">&nbsp;"</span> -->
          </h1>
        </div>
        <div class="social-media-block">
          <div class="social codepen">
            <a href="https://www.codepen.io/hrzyusoff" target="_blank">
              <font-awesome-icon :icon="['fab', 'codepen']" />
            </a>
          </div>
          <div class="social github">
            <a href="https://www.github.com/hrzyusoff" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </div>
          <div class="social dribbble">
            <a href="https://www.dribbble.com/hrzyusoff" target="_blank">
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </a>
          </div>
          <div class="social behance">
            <a href="https://www.behance.net/hrzyusoff" target="_blank">
              <font-awesome-icon :icon="['fab', 'behance']" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-wrapper">
        <!-- EN -->
        <label class="credit-block" :class="{ 'is-dark-mode-text': !isDarkMode }"
          >© 2020 Hariz Yusoff. All Rights Reserved</label
        >
        <!-- MY -->
        <!-- <label class="credit-block">Hak cipta terpelihara © 2020 Hariz Yusoff</label> -->
      </div>
    </div>
  </Layout>
</template>

<script>
// import font awesome icons used in this component
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faGithub, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';

// init icon
library.add(faCodepen, faGithub, faDribbble, faBehance);

export default {
  metaInfo: {
    title: 'Home',
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('changeMode');
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 20px 0 20px;
}

.divider {
  height: 3px;
  margin-top: 6px;
  background-color: #f1c40f;
}

.mode-toggle {
  background-color: transparent;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: 1px solid #354e67;
  outline: none;
}

.is-dark-mode-bg {
  background-color: #f1c40f;
}

.is-dark-mode-text {
  color: #f1c40f;
}

.content-wrapper,
.footer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
}

.credit-block,
.title-block {
  text-align: center;
}

.coming-soon-block {
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Share Tech', sans-serif;
}

.title-block {
  margin-top: 16px;
  h1 {
    font-family: Caveat, sans-serif;
    font-size: 30px;
  }
  .quote-size {
    font-size: 34px;
    color: #f1c40f;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 24px;
    }
  }
}

.header-wrapper {
  height: 10vh;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  height: 80vh;
}

.social-media-block {
  display: flex;
  flex-direction: row;
  margin-top: 16px;

  .social {
    font-size: 24px;
    padding: 0 16px;

    a {
      color: #4373a4;
      transition: 0.2s all;
    }

    a:hover {
      color: #f1c40f;
    }
  }
}

.footer-wrapper {
  font-size: 12px;
  height: 10vh;
}
</style>
