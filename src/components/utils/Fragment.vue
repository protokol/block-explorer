<template>
  <div class="displayContents">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Fragment extends Vue {}
</script>

<style scoped>
.displayContents {
  display: contents;
}
</style>
