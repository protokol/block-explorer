<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.NFT_REGISTER_COLLECTION`) }}
    </p>
    <div class="flex flex-wrap justify-between mb-4">
      <div class="w-full lg:w-2/3">
        <InputText
          :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_REGISTER_COLLECTION.NAME_LABEL`)"
          name="asset-nftCollection-name"
          class="mr-8 my-3"
          @input="onInputChange"
          @keyup.enter.native="onEnterKey"
        />
      </div>

      <div class="w-full lg:w-1/3">
        <InputNumber
          :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_REGISTER_COLLECTION.MAXIMUM_SUPPLY_LABEL`)"
          name="asset-nftCollection-maximumSupply"
          class="my-3"
          @input="onInputChange"
          @keyup.enter.native="onEnterKey"
        />
      </div>
    </div>
    <InputText
      :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_REGISTER_COLLECTION.DESCRIPTION_LABEL`)"
      name="asset-nftCollection-description"
      class="pt-0"
      @input="onInputChange"
      @keyup.enter.native="onEnterKey"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { AbstractSearch } from "@/components/search/AbstractSearch";

@Component
export default class NFTRegisterCollectionSearch extends Mixins(AbstractSearch) {}
</script>
