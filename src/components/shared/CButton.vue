<template>
  <button class="button" :class="[xclass ? `button${xclass}` : '']">
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class CButton extends Vue {
  @Prop(String) readonly xclass!: string
}
</script>

<style scoped lang="scss">
@import '~styles/components/shared/button';
</style>
