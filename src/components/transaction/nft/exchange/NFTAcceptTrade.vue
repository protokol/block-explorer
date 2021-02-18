<template>
  <section class="py-5 mb-5 page-section md:py-10">
    <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.NFT_ACCEPT_TRADE.ACCEPT_TRADE`) }}</h3>
    <br />
    <div class="px-5 sm:px-10">
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.NFT_ACCEPT_TRADE.AUCTION_ID`) }}</div>
        <LinkTransaction :id="transaction.asset.nftAcceptTrade.auctionId" :truncate-id="false" />
      </div>
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.NFT_ACCEPT_TRADE.BID_ID`) }}</div>
        <LinkTransaction :id="transaction.asset.nftAcceptTrade.bidId" :truncate-id="false" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";

@Component
export default class NFTAcceptTrade extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
