<template>
  <div class="board">
    <div class="row">
      <jv-cell v-model="value.A1" @jogar="jogar(value.A1)" ></jv-cell>
      <jv-cell v-model="value.B1" @jogar="jogar(value.B1)" ></jv-cell>
      <jv-cell v-model="value.C1" @jogar="jogar(value.C1)" ></jv-cell>
    </div>
    <div class="row">
      <jv-cell v-model="value.A2" @jogar="jogar(value.A2)" ></jv-cell>
      <jv-cell v-model="value.B2" @jogar="jogar(value.B2)" ></jv-cell>
      <jv-cell v-model="value.C2" @jogar="jogar(value.C2)" ></jv-cell>
    </div>
    <div class="row">
      <jv-cell v-model="value.A3" @jogar="jogar(value.A3)" ></jv-cell>
      <jv-cell v-model="value.B3" @jogar="jogar(value.B3)" ></jv-cell>
      <jv-cell v-model="value.C3" @jogar="jogar(value.C3)" ></jv-cell>
    </div>
  </div>
</template>

<script>
import jvCell from './jvCell'

export default {
  name: 'jvBoard',
  components: { jvCell },
  props: ['value'],
  methods: {
    jogar(pos) {
      this.$emit('jogar', pos)
    }
  }
}
</script>
