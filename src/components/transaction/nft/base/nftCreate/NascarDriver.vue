<template>
  <Fragment>
    <br />
    <h3 class="mb-4">
      {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_DRIVER.COLLECTION_NAME`) }}
    </h3>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_DRIVER.NAME`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.name }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_DRIVER.DESCRIPTION`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.description }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_DRIVER.TEAM`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.teamName }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_DRIVER.BIRTH`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.dateOfBirth }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_DRIVER.CAR`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.carType }}</div>
    </div>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";

@Component
export default class NascarDriver extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
