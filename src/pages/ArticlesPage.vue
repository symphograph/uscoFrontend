<template>
  <div class="content">
    <div class="eventsarea">
      <div class="artbox">
        <div class="article">
          <div id="my_article-tigran-ahnazaryan"></div>
        </div>
      </div>

      <div class="artbox">
        <div class="article">
          <div id="my_article-molitva-orkestru"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  created () {
    const ckeditor = document.createElement('script')
    ckeditor.setAttribute('src', 'https://vk.com/js/api/openapi.js?159')
    document.head.appendChild(ckeditor)
  }
}
</script>

<style scoped>

</style>
