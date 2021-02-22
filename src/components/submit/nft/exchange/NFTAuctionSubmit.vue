<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.NFT_AUCTION`) }}
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="w-full lg:w-3/4">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION.NFT_IDS`)"
          name="nft-auction-ids"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-start">
      <div class="w-full lg:w-1/4 md:w-1/2">
        <InputNumber
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION.START_AMOUNT`)"
          name="nft-auction-startingAmount"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
      <div class="w-full lg:w-1/4 md:w-1/2">
        <InputNumber
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION.BLOCK_EXPIRATION`)"
          name="nft-auction-blockExpiration"
          class="mr-10 my-2"
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
export default class NFTAuctionSubmit extends Vue {}
</script>
