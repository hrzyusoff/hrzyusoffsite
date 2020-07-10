<template>
  <Layout>
    <div class="container">
      <div class="header-wrapper">
        <button
          class="button mode-toggle"
          :class="{ 'is-active': !isButtonDarkMode }"
          @click="toggleDarkMode()"
        >
          <img src="@/assets/moon.svg" alt="Moon Icon" />
        </button>
      </div>
      <div class="content-wrapper">
        <div class="title-block">
          <h1 class="has-text-weight-bold">
            <!-- EN -->
            <span class="quote-size">"&nbsp;</span>Rome wasn't built in a day, this website
            too...<span class="quote-size">&nbsp;"</span>
            <!-- MY -->
            <!-- <span class="quote-size">"&nbsp;</span>Rome tidak terbina dalam masa satu hari, begitu
            juga dengan website ini.<span class="quote-size">&nbsp;"</span> -->
          </h1>
        </div>
      </div>
      <div class="footer-wrapper">
        <!-- EN -->
        <label class="credit-block">© 2020 Hariz Yusoff. All Rights Reserved</label>
        <!-- MY -->
        <!-- <label class="credit-block">Hak cipta terpelihara © 2020 Hariz Yusoff</label> -->
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'hrzyusoff | Personal Website',
  },
  data() {
    return {
      isButtonDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('changeMode');
      this.isButtonDarkMode = !this.isButtonDarkMode;
      console.log(this.$store.state.isDarkMode);
      console.log('Dark Mode Toggled');
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

button,
button:focus {
  outline: 0;
  box-shadow: none;
}

.mode-toggle {
  background-color: transparent;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: 1px solid #354e67;
  outline: none;

  &.is-active {
    background-color: #f1c40f;
  }
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

.title-block {
  h1 {
    font-family: Caveat;
    font-size: 24px;
  }
  .quote-size {
    font-size: 34px;
  }
}

.header-wrapper {
  height: 10vh;
}

.content-wrapper {
  height: 80vh;
}

.footer-wrapper {
  font-size: 12px;
  height: 10vh;
}
</style>
