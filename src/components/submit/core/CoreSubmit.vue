<template> </template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class CoreSubmit extends Vue {
  @Prop({ required: true })
  private transactionType: number;
}
</script>
