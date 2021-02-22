<template>
  <Fragment>
    <NFTBaseSubmit v-if="transactionGroup === getBaseGroup" :transaction-type="transactionType" />
    <NFTExchangeSubmit v-else-if="transactionGroup === getExchangeGroup" :transaction-type="transactionType" />
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TypeGroupTransaction } from "@/enums";
import NFTBaseSubmit from "@/components/submit/nft/base/NFTBaseSubmit.vue";
import NFTExchangeSubmit from "@/components/submit/nft/exchange/NFTExchangeSubmit.vue";
@Component({
  components: { NFTExchangeSubmit, NFTBaseSubmit },
})
export default class NFTSubmit extends Vue {
  @Prop({ required: true })
  private transactionGroup: number;

  @Prop({ required: true })
  private transactionType: number;

  get getBaseGroup() {
    return TypeGroupTransaction.NFT_BASE;
  }

  get getExchangeGroup() {
    return TypeGroupTransaction.NFT_EXCHANGE;
  }
}
</script>
