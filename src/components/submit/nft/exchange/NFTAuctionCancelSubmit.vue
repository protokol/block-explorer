<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.NFT_AUCTION_CANCEL`) }}
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="w-full lg:w-3/4">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION_CANCEL.AUCTION_ID`)"
          name="nft-auctionCancel-auctionId"
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
export default class NFTAuctionCancelSubmit extends Vue {}
</script>
