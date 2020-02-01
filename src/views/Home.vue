<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
import Login from '@/components/auth/Login'

export default {
  name: 'Home',
  components: { Login }
}
</script>

<style lang="scss" scoped>
@import '~styles/views/home.scss';
</style>
