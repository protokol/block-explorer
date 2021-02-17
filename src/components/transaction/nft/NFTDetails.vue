<template>
  <Fragment>
    <template v-if="transaction.typeGroup === 9000">
      <NFTRegisterCollection v-if="transaction.type === 0" :transaction="transaction" />
      <NFTCreate v-else-if="transaction.type === 1" :transaction="transaction" />
      <NFTTransfer v-else-if="transaction.type === 2" :transaction="transaction" />
      <NFTBurn v-else-if="transaction.type === 3" :transaction="transaction" />
    </template>

    <template v-if="transaction.typeGroup === 9001">
      <NFTAuction v-if="transaction.type === 0" :transaction="transaction" />
      <NFTAuctionCancel v-else-if="transaction.type === 1" :transaction="transaction" />
      <NFTBid v-else-if="transaction.type === 2" :transaction="transaction" />
      <NFTBidCancel v-else-if="transaction.type === 3" :transaction="transaction" />
      <NFTAcceptTrade v-else-if="transaction.type === 4" :transaction="transaction" />
    </template>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import { TypeGroupTransaction } from "@/enums";
import VueJsonPretty from "vue-json-pretty";
import { ApiService, NFTService } from "@/services";
import NFTRegisterCollection from "@/components/transaction/nft/base/NFTRegisterCollection.vue";
import NFTCreate from "@/components/transaction/nft/base/NFTCreate.vue";
import NFTTransfer from "@/components/transaction/nft/base/NFTTransfer.vue";
import NFTBurn from "@/components/transaction/nft/base/NFTBurn.vue";
import NFTAuction from "@/components/transaction/nft/exchange/NFTAuction.vue";
import NFTAuctionCancel from "@/components/transaction/nft/exchange/NFTAuctionCancel.vue";
import NFTBid from "@/components/transaction/nft/exchange/NFTBid.vue";
import NFTBidCancel from "@/components/transaction/nft/exchange/NFTBidCancel.vue";
import NFTAcceptTrade from "@/components/transaction/nft/exchange/NFTAcceptTrade.vue";

@Component({
  components: {
    NFTAcceptTrade,
    NFTBidCancel,
    NFTBid,
    NFTAuctionCancel,
    NFTAuction,
    NFTBurn,
    NFTTransfer,
    NFTCreate,
    NFTRegisterCollection,
    VueJsonPretty,
  },
})
export default class NFTDetails extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  private NFTBase = TypeGroupTransaction.NFT_BASE;
  private NFTExchange = TypeGroupTransaction.NFT_EXCHANGE;

  private collectionName = "";

  private async getCollection(id: string) {
    return (await NFTService.getCollection(id)).name;
  }
}
</script>
