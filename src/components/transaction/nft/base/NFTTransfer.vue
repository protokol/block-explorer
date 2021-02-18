<template>
  <section class="py-5 mb-5 page-section md:py-10">
    <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.NFT_TRANSFER.TRANSFER`) }}</h3>
    <br />
    <div class="px-5 sm:px-10">
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.NFT_TRANSFER.RECIPIENT_ID`) }}</div>
        <LinkWallet :address="transaction.asset.nftTransfer.recipientId" :trunc="false" tooltip-placement="left" />
      </div>
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.NFT_TRANSFER.NFT_IDS`) }}</div>
        <div>
          <LinkTransaction
            v-for="value in transaction.asset.nftTransfer.nftIds"
            :id="value"
            :key="value"
            :truncate-id="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";

@Component
export default class NFTTransfer extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
