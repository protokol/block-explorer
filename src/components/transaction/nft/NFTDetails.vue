<template>
  <Fragment>
    <template v-if="transaction.typeGroup === NFTBase">
      <NFTRegisterCollection
        v-if="transaction.type === NFTBaseTransactions.NFT_REGISTER_COLLECTION"
        :transaction="transaction"
      />
      <NFTCreate v-else-if="transaction.type === NFTBaseTransactions.NFT_CREATE" :transaction="transaction" />
      <NFTTransfer v-else-if="transaction.type === NFTBaseTransactions.NFT_TRANSFER" :transaction="transaction" />
      <NFTBurn v-else-if="transaction.type === NFTBaseTransactions.NFT_BURN" :transaction="transaction" />
    </template>

    <template v-if="transaction.typeGroup === NFTExchange">
      <NFTAuction v-if="transaction.type === NFTExchangeTransactions.NFT_AUCTION" :transaction="transaction" />
      <NFTAuctionCancel
        v-else-if="transaction.type === NFTExchangeTransactions.NFT_AUCTION_CANCEL"
        :transaction="transaction"
      />
      <NFTBid v-else-if="transaction.type === NFTExchangeTransactions.NFT_BID" :transaction="transaction" />
      <NFTBidCancel
        v-else-if="transaction.type === NFTExchangeTransactions.NFT_BID_CANCEL"
        :transaction="transaction"
      />
      <NFTAcceptTrade
        v-else-if="transaction.type === NFTExchangeTransactions.NFT_ACCEPT_TRADE"
        :transaction="transaction"
      />
    </template>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import { NFTBaseTransactionTypes, NFTExchangeTransactionTypes, TypeGroupTransaction } from "@/enums";
import VueJsonPretty from "vue-json-pretty";

@Component({
  components: {
    VueJsonPretty,
  },
})
export default class NFTDetails extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  private NFTBase = TypeGroupTransaction.NFT_BASE;
  private NFTBaseTransactions = NFTBaseTransactionTypes;

  private NFTExchange = TypeGroupTransaction.NFT_EXCHANGE;
  private NFTExchangeTransactions = NFTExchangeTransactionTypes;
}
</script>
