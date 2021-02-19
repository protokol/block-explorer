<template>
  <div>
    <div class="mx-5 mb-5 mb-10 sm:mx-10">
      <p class="mb-2 mt-4 font-bold">
        {{ $t(`TRANSACTION.TYPES.NFT_TRANSFER`) }}
      </p>
      <div class="flex flex-wrap justify-between mb-4">
        <div class="w-full lg:w-2/3">
          <InputText
            :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_TRANSFER.ASSET_ID_LABEL`)"
            name="asset-nftTransfer-nftIds"
            class="mr-8 my-3"
            @input="onInputChange"
            @keyup.enter.native="onEnterKey"
          />
        </div>
        <div class="w-full lg:w-1/3">
          <InputText
            :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_TRANSFER.RECIPIENT_LABEL`)"
            name="asset-nftTransfer-recipientId"
            class="mr-8 my-3"
            @input="onInputChange"
            @keyup.enter.native="onEnterKey"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { AbstractSearch } from "@/components/search/AbstractSearch";

@Component
export default class NFTTransferSearch extends Mixins(AbstractSearch) {}
</script>
