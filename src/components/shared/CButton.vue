<template>
  <button
    class="button"
    :class="[xclass ? `button${xclass}` : '']"
    @click="onClick($event)"
  >
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class CButton extends Vue {
  @Prop(String) readonly xclass!: string

  onClick(e: Event) {
    this.$emit('click', e)
  }
}
</script>

<style scoped lang="scss">
@import '~styles/basics/buttons.scss';
</style>
