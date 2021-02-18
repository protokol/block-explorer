<template>
  <Fragment>
    <section class="py-5 mb-5 page-section md:py-10">
      <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.NFT_CREATE.TOKEN`) }}</h3>
      <br />
      <div class="px-5 sm:px-10">
        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.COLLECTION_ID`) }}</div>
          <LinkTransaction :id="transaction.asset.nftToken.collectionId" :truncate-id="false" />
        </div>

        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.COLLECTION_NAME`) }}</div>
          <div>{{ collectionName }}</div>
        </div>

        <AREX v-if="collectionName === 'AREX Defense Handguns'" :transaction="transaction" />
        <NascarTeam v-else-if="collectionName === 'Nascar Team'" :transaction="transaction" />
        <NascarHeroCards v-else-if="collectionName === 'Nascar Hero Cards'" :transaction="transaction" />

        <Generic v-else :transaction="transaction" />
      </div>
    </section>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import { NFTService } from "@/services";

@Component
export default class NFTCreate extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  private collectionName = "";

  public async mounted(): Promise<void> {
    this.collectionName = (await NFTService.getCollection(this.transaction.asset.nftToken.collectionId)).name;
  }
}
</script>
