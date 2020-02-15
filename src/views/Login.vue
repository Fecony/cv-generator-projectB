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
          <div class="login__method login__method--active">Log in</div>
          <div class="login__method">Sign Up</div>
        </div>
        <form class="login__form" @submit.prevent="onLogin">
          <c-input v-model="userData.email" type="email" label="Email" />
          <c-input
            v-model="userData.password"
            type="password"
            label="Password"
          />
          <c-button xclass="--auth">Login</c-button>
        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CButton from '@/components/shared/CButton.vue'
import CInput from '@/components/shared/CInput.vue'

@Component({
  components: { CButton, CInput }
})
export default class Login extends Vue {
  userData = {
    email: '',
    password: ''
  }

  onLogin() {
    console.log(`logged in as: ${this.userData.email}`)
  }
}
</script>

<style scoped lang="scss">
@import '~styles/pages/login';
</style>
