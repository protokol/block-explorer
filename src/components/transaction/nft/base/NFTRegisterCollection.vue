<template>
  <Fragment>
    <section class="py-5 mb-5 page-section md:py-10">
      <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.NFT_REGISTER_COLLECTION.COLLECTION`) }}</h3>
      <br />
      <div class="px-5 sm:px-10">
        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_REGISTER_COLLECTION.NAME`) }}</div>
          <div class="overflow-hidden break-all">{{ transaction.asset.nftCollection.name }}</div>
        </div>
        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_REGISTER_COLLECTION.DESCRIPTION`) }}</div>
          <div class="overflow-hidden break-all">{{ transaction.asset.nftCollection.description }}</div>
        </div>
        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_REGISTER_COLLECTION.MAXIMUM_SUPPLY`) }}</div>
          <div class="overflow-hidden break-all">{{ transaction.asset.nftCollection.maximumSupply }}</div>
        </div>
        <div class="list-row-border-b">
          <div>
            <div class="mr-4">{{ $t(`TRANSACTION.NFT_REGISTER_COLLECTION.JSON_SCHEMA`) }}</div>
            <vue-json-pretty style="margin-top: 16px;" :data="transaction.asset.nftCollection.jsonSchema" />
          </div>
        </div>
        <div v-if="transaction.asset.nftCollection.allowedIssuers" class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_REGISTER_COLLECTION.ALLOWED_ISSUERS`) }}</div>
          <div>
            <div v-for="value in transaction.asset.nftCollection.allowedIssuers" :key="value">
              <LinkWallet :trunc="false" :address="addressFromPublicKey(value)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import VueJsonPretty from "vue-json-pretty";

@Component({
  components: {
    VueJsonPretty,
  },
})
export default class NFTRegisterCollection extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
