<template>
  <Fragment>
    <section class="py-5 mb-5 page-section md:py-10">
      <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.NFT_AUCTION.AUCTION`) }}</h3>
      <br />
      <div class="px-5 sm:px-10">
        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_AUCTION.NFT_IDS`) }}</div>
          <div>
            <LinkTransaction
              v-for="value in transaction.asset.nftAuction.nftIds"
              :id="value"
              :key="value"
              :truncate-id="false"
            />
          </div>
        </div>
        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_AUCTION.START_AMOUNT`) }}</div>
          <div class="overflow-hidden break-all">{{ readableCrypto(transaction.asset.nftAuction.startAmount) }}</div>
        </div>
        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_AUCTION.EXPIRATION`) }}</div>
          <div class="overflow-hidden break-all">{{ transaction.asset.nftAuction.expiration.blockHeight }}</div>
        </div>
        <div class="list-row-border-b">
          <div class="mr-4">{{ "Is Active" }}</div>
          <div class="overflow-hidden break-all">{{ isAuctionActive }}</div>
        </div>
      </div>
    </section>

    <section v-if="bids.length > 0" class="py-5 mb-5 page-section md:py-10">
      <h3 class="px-5 sm:px-10 mb-6">{{ $t(`TRANSACTION.NFT_AUCTION.BIDS`) }}</h3>
      <div v-for="bid in bids" :key="bid.id" class="px-5 sm:px-8">
        <div class="list-row-border-b">
          <div class="mr-4">
            <LinkTransaction :id="bid.id" :key="bid.bidId" :truncate-id="false" />
          </div>
          <div>
            {{ readableCrypto(bid.nftBid.bidAmount) }}
          </div>
        </div>
      </div>
    </section>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import { NFTService } from "@/services";

@Component
export default class NFTAuction extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  private isAuctionActive = true;
  private bids: [] = [];

  public async mounted(): Promise<void> {
    try {
      await NFTService.getAuctionWallets(this.transaction.id);
    } catch {
      this.isAuctionActive = false;
    }

    this.bids = await NFTService.bidsSearch({ auctionId: this.transaction.id });
  }
}
</script>
