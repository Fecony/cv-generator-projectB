<template>
  <label :for="name">
    <span>{{ label }}</span>
    <input type="text" />
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class CInput extends Vue {
  @Prop(String) readonly name!: string
}
</script>

<style scoped lang="scss">
@import '~styles/basics/inputs.scss';
</style>
