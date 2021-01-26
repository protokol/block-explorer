<template>
  <div>
    <div id="transactionForm" class="mx-5 mb-5 mb-10 sm:mx-10">
      <p class="mb-4 font-bold">
        {{ $t("PAGES.ADVANCED_SEARCH.ADDITIONAL_PARAMETERS") }}
      </p>

      <div class="flex flex-wrap justify-between">
        <div class="w-full mb-4 lg:w-64 lg:mb-0">
          <InputSelect
            :select-options="selectOptions"
            :label="$t('COMMON.TYPE')"
            :value="transactionType.key"
            name="Transaction Types"
            class="flex-1"
            @input="onTypeChange"
          />
        </div>

        <div class="flex w-full mb-4 lg:w-56 lg:mb-0">
          <div class="w-1/2 mr-3">
            <InputNumber
              :label="$t('PAGES.ADVANCED_SEARCH.TRANSACTION.AMOUNT_FROM')"
              name="amount-from"
              min="0"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>

          <div class="w-1/2">
            <InputNumber
              :label="$t('PAGES.ADVANCED_SEARCH.TRANSACTION.AMOUNT_TO')"
              name="amount-to"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
        </div>

        <div class="flex w-full mb-4 lg:w-56 lg:mb-0">
          <div class="w-1/2 mr-3">
            <InputNumber
              :label="$t('PAGES.ADVANCED_SEARCH.TRANSACTION.FEE_FROM')"
              name="fee-from"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
          <div class="w-1/2">
            <InputNumber
              :label="$t('PAGES.ADVANCED_SEARCH.TRANSACTION.FEE_TO')"
              name="fee-to"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
        </div>

        <div class="flex w-full mb-4 lg:w-auto lg:mb-0">
          <div class="w-1/2 mr-3">
            <InputDate
              :label="$t('PAGES.ADVANCED_SEARCH.GENERIC.DATE_FROM')"
              name="timestamp-from"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
          <div class="w-1/2">
            <InputDate
              :label="$t('PAGES.ADVANCED_SEARCH.GENERIC.DATE_TO')"
              name="timestamp-to"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
        </div>
      </div>

      <InputText
        :label="$t('TRANSACTION.SMARTBRIDGE')"
        name="vendorField"
        class="pt-0"
        @input="onInputChange"
        @keyup.enter.native="onEnterKey"
      />
    </div>

    <div v-if="type === 1">
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
    </div>

    <div v-else-if="type === 2">
      <div class="mx-5 mb-5 mb-10 sm:mx-10">
        <p class="mb-2 mt-4 font-bold">
          {{ $t(`TRANSACTION.TYPES.NFT_CREATE`) }}
        </p>
        <div class="flex flex-wrap justify-between mb-4">
          <div class="w-full lg:w-2/3">
            <InputText
              :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_CREATE_ASSET.COLLECTION_ID_LABEL`)"
              name="asset-nftToken-collectionId"
              class="mr-8 my-3"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="type === 3">
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

    <div v-else-if="type === 4">
      <div class="mx-5 mb-5 mb-10 sm:mx-10">
        <p class="mb-2 mt-4 font-bold">
          {{ $t(`TRANSACTION.TYPES.NFT_BURN`) }}
        </p>
        <div class="flex flex-wrap justify-between mb-4">
          <div class="w-full lg:w-2/3">
            <InputText
              :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_BURN.ASSET_ID_LABEL`)"
              name="asset-nftBurn-nftId"
              class="mr-8 my-3"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="type === 5">
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

    <div v-else-if="type === 6">
      <div class="mx-5 mb-5 mb-10 sm:mx-10">
        <p class="mb-2 mt-4 font-bold">
          {{ $t(`TRANSACTION.TYPES.NFT_AUCTION_CANCEL`) }}
        </p>
        <div class="flex flex-wrap justify-between">
          <div class="w-full lg:w-2/3">
            <InputText
              :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_AUCTION_CANCEL.AUCTION_ID_LABEL`)"
              name="asset-nftAuctionCancel-auctionId"
              class="mr-8 my-3"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="type === 7">
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

    <div v-else-if="type === 8">
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

    <div v-else-if="type === 9">
      <div class="mx-5 mb-5 mb-10 sm:mx-10">
        <p class="mb-2 mt-4 font-bold">
          {{ $t(`TRANSACTION.TYPES.NFT_ACCEPT_TRADE`) }}
        </p>
        <div class="flex flex-wrap justify-between">
          <div class="w-full lg:w-2/3">
            <InputText
              :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_ACCEPT_TRADE.AUCTION_ID_LABEL`)"
              name="asset-nftAcceptTrade-auctionId"
              class="mr-8 my-3"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
        </div>
        <div class="flex flex-wrap justify-between">
          <div class="w-full lg:w-2/3">
            <InputText
              :label="$t(`PAGES.ADVANCED_SEARCH.TRANSACTION.NFT.NFT_ACCEPT_TRADE.BID_ID_LABEL`)"
              name="asset-nftAcceptTrade-bidId"
              class="mr-8 my-3"
              @input="onInputChange"
              @keyup.enter.native="onEnterKey"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransactionType } from "@/interfaces";

@Component
export default class TransactionSearchForm extends Vue {
  private transactionType: ITransactionType = { key: "ALL", type: -1 };

  private type = 0;

  get types() {
    return this.$store.getters["network/enabledTransactionTypes"];
  }

  get selectOptions() {
    return this.types.map((type) => ({
      value: type.key,
      display: this.$t(`TRANSACTION.TYPES.${type.key}`),
    }));
  }

  private onInputChange(event: any) {
    const { name, value } = event.target;
    console.log(name);
    this.emitInput({ name, value });
  }

  private onTypeChange(event: any) {
    const index: number = this.types.findIndex((transaction) => transaction.key === event.target.value);
    const { type, typeGroup, asset } = this.types[index];
    if (typeGroup === 9000) {
      switch (type) {
        case 0:
          this.type = 1;
          break;
        case 1:
          this.type = 2;
          break;
        case 2:
          this.type = 3;
          break;
        case 3:
          this.type = 4;
          break;
        default:
          this.type = 0;
      }
    } else if (typeGroup === 9001) {
      switch (type) {
        case 0:
          this.type = 5;
          break;
        case 1:
          this.type = 6;
          break;
        case 2:
          this.type = 7;
          break;
        case 3:
          this.type = 8;
          break;
        case 4:
          this.type = 9;
          break;
        default:
          this.type = 0;
      }
    } else {
      this.type = 0;
    }

    this.emitInput({ name: "type", value: type !== -1 ? type : null });
    this.emitInput({ name: "typeGroup", value: typeGroup });
    this.emitInput({ name: "asset", value: asset });
  }

  private emitInput(value: object) {
    this.$emit("formChange", value);
  }

  private onEnterKey(event: any) {
    this.$emit("search");
  }
}
</script>
