<template>
  <Fragment>

  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import Fragment from "@/components/utils/Fragment.vue";

@Component({
  components: {
    Fragment,
  },
})
export default class NFTAcceptTrade extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
