<template>
  <div>
    <div class="mx-5 mb-5 mb-10 sm:mx-10">
      <p class="mb-2 mt-4 font-bold">
        {{ $t(`TRANSACTION.TYPES.NFT_BID`) }}
      </p>
      <div class="flex flex-wrap justify-between">
        <div class="w-full lg:w-2/3">
          <InputText
            :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_BID.AUCTION_ID_LABEL`)"
            name="asset-nftBid-auctionId"
            class="mr-8 my-3"
            @input="onInputChange"
            @keyup.enter.native="onEnterKey"
          />
        </div>

        <!-- TODO: replace it when from/to ready -->
        <div class="w-full lg:w-1/3">
          <InputNumber
            :label="'Bid amount'"
            name="asset-nftBid-bidAmount"
            class="mr-8 my-3"
            @input="onInputChange"
            @keyup.enter.native="onEnterKey"
          />
        </div>

        <!-- TODO: replace it when from/to ready -->

        <!--          <div class="w-full lg:w-1/3">-->
        <!--            <div class="flex flex-wrap justify-between">-->
        <!--              <div class="w-1/2">-->
        <!--                <InputNumber-->
        <!--                  :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_BID.AMOUNT_FROM_LABEL`)"-->
        <!--                  name="bid-amountFrom"-->
        <!--                  class="mr-4 my-3"-->
        <!--                />-->
        <!--              </div>-->
        <!--              <div class="w-1/2">-->
        <!--                <InputNumber-->
        <!--                  :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_BID.AMOUNT_TO_LABEL`)"-->
        <!--                  name="bid-amountFrom"-->
        <!--                  class="mr-4 my-3"-->
        <!--                />-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NFTBidSearch extends Vue {
  private onInputChange(event: any) {
    const { name, value } = event.target;
    this.emitInput({ name, value });
  }

  private onEnterKey(event: any) {
    this.$emit("search");
  }
}
</script>
