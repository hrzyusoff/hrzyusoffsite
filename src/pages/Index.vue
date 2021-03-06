<template>
  <Layout>
    <div class="container">
      <div class="header-wrapper" style="visibility: hidden;">
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
        <div class="title-block">
          <h1 class="has-text-weight-bold" :class="{ 'is-dark-mode-text': !isDarkMode }"></h1>
        </div>
        <!-- TODO: Refactor -->
        <div class="social-media-block">
          <div class="social codepen">
            <b-tooltip label="Codepen" :delay="customDelay" :animated="isAnimated">
              <a
                :class="{ 'is-dark-mode-link': !isDarkMode }"
                href="https://www.codepen.io/hrzyusoff"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'codepen']" />
              </a>
            </b-tooltip>
          </div>
          <div class="social github">
            <b-tooltip label="Github" :delay="customDelay" :animated="isAnimated">
              <a
                :class="{ 'is-dark-mode-link': !isDarkMode }"
                href="https://www.github.com/hrzyusoff"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </b-tooltip>
          </div>
          <div class="social dribbble">
            <b-tooltip label="Dribbble" :delay="customDelay" :animated="isAnimated">
              <a
                :class="{ 'is-dark-mode-link': !isDarkMode }"
                href="https://www.dribbble.com/hrzyusoff"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'dribbble']" />
              </a>
            </b-tooltip>
          </div>
          <div class="social behance">
            <b-tooltip label="Behance" :delay="customDelay" :animated="isAnimated">
              <a
                :class="{ 'is-dark-mode-link': !isDarkMode }"
                href="https://www.behance.net/hrzyusoff"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'behance']" />
              </a>
            </b-tooltip>
          </div>
          <div class="social codewars">
            <b-tooltip label="Codewars" :delay="customDelay" :animated="isAnimated">
              <a
                :class="{ 'is-dark-mode-link': !isDarkMode }"
                href="https://www.codewars.com/users/hrzyusoff/completed_solutions"
                target="_blank"
              >
                <font-awesome-icon :icon="['fas', 'code']" />
              </a>
            </b-tooltip>
          </div>
        </div>
      </div>
      <div class="footer-wrapper">
        <label class="credit-block" :class="{ 'is-dark-mode-text': !isDarkMode }"
          >© {{ getCurrentYear }} Hariz Yusoff. All Rights Reserved</label
        >
      </div>
    </div>
  </Layout>
</template>

<script>
// import font awesome icons used in this component
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';

// init icon
library.add(faCodepen, faGithub, faDribbble, faBehance, faCode);

export default {
  metaInfo: {
    title: 'Home',
  },
  data() {
    return {
      isDarkMode: false,
      customDelay: 500,
      isAnimated: true,
    };
  },
  computed: {
    getCurrentYear() {
      let year = new Date();
      return year.getFullYear();
    },
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
// yellow divider
.divider {
  height: 3px;
  margin-top: 6px;
  background-color: #4373a4;
}

// general styling
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

// dark mode toggle class
.mode-toggle {
  background-color: transparent;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: 1px solid #354e67;
  outline: none;
}

// topmost text class
.coming-soon-block {
  font-size: 30px;
  text-transform: uppercase;
  font-family: 'Share Tech', sans-serif;
}

// middle text class
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

// header class
.header-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 20px 0 20px;
  height: 10vh;
}

// content class
.content-wrapper {
  display: flex;
  flex-direction: column;
  height: 80vh;
}

// codepen, github, dribbble and behance class
.social-media-block {
  display: flex;
  flex-direction: row;
  margin-top: 16px;

  .social {
    font-size: 24px;
    padding: 0 16px;

    a:hover {
      color: #4373a4;
    }

    a {
      &.is-dark-mode-link {
        color: #f1c40f;
      }
    }
  }
}

// footer class
.footer-wrapper {
  font-size: 12px;
  height: 10vh;
}

// dark mode class
.is-dark-mode-bg {
  background-color: #f1c40f;
}

.is-dark-mode-text {
  color: #f1c40f;
}
</style>
