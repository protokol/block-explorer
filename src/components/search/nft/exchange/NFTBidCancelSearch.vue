<template>
  <div>
    <div class="mx-5 mb-5 mb-10 sm:mx-10">
      <p class="mb-2 mt-4 font-bold">
        {{ $t(`TRANSACTION.TYPES.NFT_BID_CANCEL`) }}
      </p>
      <div class="flex flex-wrap justify-between">
        <div class="w-full lg:w-2/3">
          <InputText
            :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_BID_CANCEL.BID_ID_LABEL`)"
            name="asset-nftBidCancel-bidId"
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
export default class NFTBidCancelSearch extends Mixins(AbstractSearch) {}
</script>
