<template>
  <Fragment>
    <NFTRegisterCollectionSubmit v-if="getBaseTransactions.NFT_REGISTER_COLLECTION === transactionType" />
    <NFTCreateSubmit v-else-if="getBaseTransactions.NFT_CREATE === transactionType" />
    <NFTTransferSubmit v-else-if="getBaseTransactions.NFT_TRANSFER === transactionType" />
    <NFTBurnSubmit v-else-if="getBaseTransactions.NFT_BURN === transactionType" />
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NFTBaseTransactionTypes } from "@/enums";
import NFTRegisterCollectionSubmit from "@/components/submit/nft/base/NFTRegisterCollectionSubmit.vue";
import NFTCreateSubmit from "@/components/submit/nft/base/NFTCreateSubmit.vue";
import NFTTransferSubmit from "@/components/submit/nft/base/NFTTransferSubmit.vue";
import NFTBurnSubmit from "@/components/submit/nft/base/NFTBurnSubmit.vue";
@Component({
  components: {
    NFTBurnSubmit,
    NFTTransferSubmit,
    NFTCreateSubmit,
    NFTRegisterCollectionSubmit,
  },
})
export default class NFTBaseSubmit extends Vue {
  @Prop({ required: true })
  private transactionType: number;

  get getBaseTransactions() {
    return NFTBaseTransactionTypes;
  }
}
</script>
