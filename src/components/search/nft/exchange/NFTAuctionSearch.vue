<template>
  <div>
    <div class="mx-5 mb-5 mb-10 sm:mx-10">
      <p class="mb-2 mt-4 font-bold">
        {{ $t(`TRANSACTION.TYPES.NFT_AUCTION`) }}
      </p>
      <div class="flex flex-wrap justify-between">
        <div class="w-full lg:w-2/3">
          <InputText
            :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_AUCTION.ASSET_ID_LABEL`)"
            name="asset-nftAuction-nftIds"
            class="mr-8 my-3"
            @input="onInputChange"
            @keyup.enter.native="onEnterKey"
          />
        </div>

        <!-- TODO: replace it when from/to ready -->
        <div class="w-full lg:w-1/3">
          <InputNumber
            :label="'Start amount'"
            name="asset-nftAuction-startAmount"
            class="mr-8 my-3"
            @input="onInputChange"
            @keyup.enter.native="onEnterKey"
          />
        </div>
      </div>
      <!-- TODO: replace it when from/to ready -->
      <!--        <div class="flex w-full mb-4 lg:w-auto lg:mb-0">-->
      <!--          <div class="w-1/4">-->
      <!--            <InputNumber-->
      <!--              :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_AUCTION.AMOUNT_FROM_LABEL`)"-->
      <!--              name="auction-amountFrom"-->
      <!--              class="mr-4 my-3"-->
      <!--            />-->
      <!--          </div>-->
      <!--          <div class="w-1/4 mr-10">-->
      <!--            <InputNumber-->
      <!--              :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_AUCTION.AMOUNT_TO_LABEL`)"-->
      <!--              name="auction-amountTo"-->
      <!--              class="mr-4 my-3"-->
      <!--            />-->
      <!--          </div>-->
      <!--          <div class="w-1/4">-->
      <!--            <InputNumber-->
      <!--              :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_AUCTION.EXPIRATION_FROM_LABEL`)"-->
      <!--              name="auction-expirationFrom"-->
      <!--              class="mr-4 my-3"-->
      <!--            />-->
      <!--          </div>-->
      <!--          <div class="w-1/4">-->
      <!--            <InputNumber-->
      <!--              :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_AUCTION.EXPIRATION_TO_LABEL`)"-->
      <!--              name="auction-expirationTo"-->
      <!--              class="mr-4 my-3"-->
      <!--            />-->
      <!--          </div>-->
      <!--        </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { AbstractSearch } from "@/components/search/AbstractSearch";

@Component
export default class NFTAuctionSearch extends Mixins(AbstractSearch) {}
</script>
