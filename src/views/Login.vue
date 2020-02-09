<template>
  <div class="login">
    <section class="login__container">
      <div class="login__left">
        <img
          class="login__image"
          alt="aside pattern image"
          src="@/assets/pattern4.png"
        />
      </div>
      <div class="login__right">
        <div class="login__methods">
          <div class="login__method login__method--active">Login</div>
          <div class="login__method">Sign Up</div>
        </div>
        <form class="login__form" @submit.prevent="onLogin">
          <!-- change to components -->
          <input type="text" />
          <input type="password" />
          <c-button xclass="--auth">Login</c-button>
        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CButton from '@/components/shared/CButton.vue'

@Component({
  components: {
    CButton
  }
})
export default class Login extends Vue {
  onLogin() {
    console.log('logged')
  }
}
</script>

<style scoped lang="scss">
@import '~styles/views/login.scss';
</style>
