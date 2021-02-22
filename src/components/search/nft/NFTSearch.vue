<template>
  <Fragment>
    <template v-if="transactionGroup === getBaseGroup">
      <NFTRegisterCollectionSearch
        v-if="transactionType === getBaseTransactions.NFT_REGISTER_COLLECTION"
        @search="search"
      />
      <NFTCreateSearch v-else-if="transactionType === getBaseTransactions.NFT_CREATE" @search="search" />
      <NFTTransferSearch v-else-if="transactionType === getBaseTransactions.NFT_TRANSFER" @search="search" />
      <NFTBurnSearch v-else-if="transactionType === getBaseTransactions.NFT_BURN" @search="search" />
    </template>

    <template v-else-if="transactionGroup === getExchangeGroup">
      <NFTAuctionSearch v-if="transactionType === getExchangeTransactions.NFT_AUCTION" @search="search" />
      <NFTAuctionCancelSearch
        v-else-if="transactionType === getExchangeTransactions.NFT_AUCTION_CANCEL"
        @search="search"
      />
      <NFTBidSearch v-else-if="transactionType === getExchangeTransactions.NFT_BID" @search="search" />
      <NFTBidCancelSearch v-else-if="transactionType === getExchangeTransactions.NFT_BID_CANCEL" @search="search" />
      <NFTAcceptTradeSearch v-else-if="transactionType === getExchangeTransactions.NFT_ACCEPT_TRADE" @search="search" />
    </template>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NFTBaseTransactionTypes, NFTExchangeTransactionTypes, TypeGroupTransaction } from "@/enums";
import NFTRegisterCollectionSearch from "@/components/search/nft/base/NFTRegisterCollectionSearch.vue";
import NFTCreateSearch from "@/components/search/nft/base/NFTCreateSearch.vue";
import NFTTransferSearch from "@/components/search/nft/base/NFTTransferSearch.vue";
import NFTBurnSearch from "@/components/search/nft/base/NFTBurnSearch.vue";
import NFTAuctionSearch from "@/components/search/nft/exchange/NFTAuctionSearch.vue";
import NFTAuctionCancelSearch from "@/components/search/nft/exchange/NFTAuctionSearch.vue";
import NFTBidSearch from "@/components/search/nft/exchange/NFTBidSearch.vue";
import NFTBidCancelSearch from "@/components/search/nft/exchange/NFTBidCancelSearch.vue";
import NFTAcceptTradeSearch from "@/components/search/nft/exchange/NFTAcceptTradeSearch.vue";

@Component({
  components: {
    NFTAuctionSearch,
    NFTRegisterCollectionSearch,
    NFTCreateSearch,
    NFTTransferSearch,
    NFTBurnSearch,
    NFTAuctionCancelSearch,
    NFTBidSearch,
    NFTBidCancelSearch,
    NFTAcceptTradeSearch,
  },
})
export default class NFTSearch extends Vue {
  @Prop({ required: true })
  private transactionGroup: number;

  @Prop({ required: true })
  private transactionType: number;

  get getBaseGroup() {
    return TypeGroupTransaction.NFT_BASE;
  }

  get getBaseTransactions() {
    return NFTBaseTransactionTypes;
  }

  get getExchangeGroup() {
    return TypeGroupTransaction.NFT_EXCHANGE;
  }

  get getExchangeTransactions() {
    return NFTExchangeTransactionTypes;
  }

  private emitInput(value: object) {
    this.$emit("formChange", value);
  }

  private async search({ name, value }): Promise<void> {
    this.emitInput({ name, value });
  }
}
</script>
