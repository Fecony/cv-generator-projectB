<template>
  <label :for="type" class="form-field">
    <span class="form-field__label">{{ label }}</span>
    <input
      class="form-field__input"
      v-bind="$attrs"
      :value="value"
      :type="type"
      v-on="$listeners"
      @input="$emit('update', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from 'vue-property-decorator'

const TYPES = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'color'
]

@Component({
  inheritAttrs: false
})
export default class CInput extends Vue {
  @Prop({ default: '' }) readonly label!: string
  @Prop({
    default: 'text',
    type: String,
    validator: value => {
      const isValid = TYPES.includes(value)
      if (!isValid) {
        console.warn(
          `CInput: allowed types are ${TYPES}, you tried to use: "${value}"`
        )
      }
      return isValid
    }
  })
  readonly type!: string
  @Model('update', { default: '', type: [String, Number] }) readonly value:
    | string
    | number
    | undefined
}
</script>

<style scoped lang="scss">
@import '~styles/components/shared/input';
</style>
