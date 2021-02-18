<template>
  <Fragment> </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";

@Component
export default class UserPermissions extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

}
</script>
