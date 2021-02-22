<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.NFT_ACCEPT_TRADE`) }}
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="w-full md:w-3/4">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_ACCEPT_TRADE.AUCTION_ID`)"
          name="nft-acceptTrade-auctionId"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="w-full md:w-3/4">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_ACCEPT_TRADE.BID_ID`)"
          name="nft-acceptTrade-bidId"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-between mb-4">
      <div class="w-full">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
          name="vendorField"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-between mb-4">
      <div class="w-full">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
          :value="properties['passphrase']"
          name="passphrase"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class NFTAcceptTradeSubmit extends Vue {}
</script>
