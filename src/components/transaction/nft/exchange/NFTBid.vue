<template>
  <section class="py-5 mb-5 page-section md:py-10">
    <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.NFT_BID.BID`) }}</h3>
    <br />
    <div class="px-5 sm:px-10">
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.NFT_BID.AUCTION_ID`) }}</div>
        <LinkTransaction :id="transaction.asset.nftBid.auctionId" :truncate-id="false" />
      </div>
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.NFT_BID.AMOUNT`) }}</div>
        <div class="overflow-hidden break-all">{{ readableCrypto(transaction.asset.nftBid.bidAmount) }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";

@Component
export default class NFTBid extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
