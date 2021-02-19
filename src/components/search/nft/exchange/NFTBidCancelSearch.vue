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
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NFTBidCancelSearch extends Vue {
  private onInputChange(event: any) {
    const { name, value } = event.target;
    // this.emitInput({ name, value });
  }

  private onEnterKey(event: any) {
    this.$emit("search");
  }
}
</script>
