<template>
  <Layout>
    <div class="container">
      <div class="content-wrapper">
        <div class="title-block">
          <h1 class="has-text-weight-bold">
            "Rome tidak terbina dalam masa satu hari, begitu juga dengan website ini."
          </h1>
        </div>
      </div>
      <div class="footer-wrapper">
        <label class="credit-block">Hak cipta terpelihara © 2020 Hariz Yusoff</label>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'hrzyusoff | Personal Website',
  },
};
</script>

<style lang="scss" scoped>
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

.content-wrapper {
  height: 90vh;
}

.footer-wrapper {
  font-size: 12px;
  height: 10vh;
}
</style>
