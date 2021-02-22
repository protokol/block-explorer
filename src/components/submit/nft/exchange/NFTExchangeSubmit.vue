<template>
  <Fragment>
    <NFTAuctionSubmit v-if="getExchangeTransactions.NFT_AUCTION === transactionType" />
    <NFTAuctionCancelSubmit v-else-if="getExchangeTransactions.NFT_AUCTION_CANCEL === transactionType" />
    <NFTBidSubmit v-else-if="getExchangeTransactions.NFT_BID === transactionType" />
    <NFTBidCancelSubmit v-else-if="getExchangeTransactions.NFT_BID_CANCEL === transactionType" />
    <NFTAcceptTradeSubmit v-else-if="getExchangeTransactions.NFT_ACCEPT_TRADE === transactionType" />
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NFTExchangeTransactionTypes } from "@/enums";
import NFTAuctionSubmit from "@/components/submit/nft/exchange/NFTAuctionSubmit.vue";
import NFTAuctionCancelSubmit from "@/components/submit/nft/exchange/NFTAuctionCancelSubmit.vue";
import NFTBidSubmit from "@/components/submit/nft/exchange/NFTBidSubmit.vue";
import NFTBidCancelSubmit from "@/components/submit/nft/exchange/NFTBidCancelSubmit.vue";
import NFTAcceptTradeSubmit from "@/components/submit/nft/exchange/NFTAcceptTradeSubmit.vue";

@Component({
  components: {
    NFTAcceptTradeSubmit,
    NFTBidCancelSubmit,
    NFTBidSubmit,
    NFTAuctionCancelSubmit,
    NFTAuctionSubmit,
  },
})
export default class NFTExchangeSubmit extends Vue {
  @Prop({ required: true })
  private transactionType: number;

  get getExchangeTransactions() {
    return NFTExchangeTransactionTypes;
  }
}
</script>
