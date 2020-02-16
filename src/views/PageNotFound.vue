<template>
  <div class="404">
    <h1>404</h1>
    <p>Page not found</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageNotFound extends Vue {}
</script>

<style lang="scss" scoped>
@import '~styles/pages/page-not-found';
</style>
