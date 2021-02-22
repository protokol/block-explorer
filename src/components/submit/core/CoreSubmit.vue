<template>
  <Fragment>
    <TransferSubmit v-if="transactionType === getCoreTransactions.TRANSFER" />
    <NotSupportedSubmit v-else />
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TransferSubmit from "@/components/submit/core/TransferSubmit.vue";
import { CoreTransaction } from "@/enums";
import NotSupportedSubmit from "@/components/submit/NotSupportedSubmit.vue";
@Component({
  components: {
    NotSupportedSubmit,
    TransferSubmit,
  },
})
export default class CoreSubmit extends Vue {
  @Prop({ required: true })
  private transactionType: number;

  get getCoreTransactions() {
    return CoreTransaction;
  }
}
</script>
