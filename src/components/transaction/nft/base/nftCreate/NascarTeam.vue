<template>
  <Fragment>
    <br />
    <h3 class="mb-4">
      {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.COLLECTION_NAME`) }}
    </h3>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.TEAM_NAME`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.teamName }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.ipfsHashImage" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.TEAM_LOGO`) }}</h4>
      <img :src="nftService.getImage(transaction.asset.nftToken.attributes.ipfsHashImage)" alt="" />
    </div>
    <div class="list-row-border-b">
      <div>
        <h4 class="mr-4 mb-2">
          {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.DESCRIPTION`) }}
        </h4>
        <div>{{ transaction.asset.nftToken.attributes.description }}</div>
      </div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.CAR_TYPE`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.carType }}</div>
    </div>
    <div class="list-row-border-b">
      <div>
        <h4 class="mr-4 mb-4">
          {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.DRIVERS`) }}
        </h4>
        <div v-for="driver in transaction.asset.nftToken.attributes.drivers" :key="driver.name" class="mb-4">
          <div>{{ driver.name }}</div>
          <div>Number {{ driver.number }}</div>
          <img v-if="driver.ipfsHashImage" :src="nftService.getImage(driver.ipfsHashImage)" alt="" />
        </div>
      </div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.TEAM_OWNER`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.teamOwner }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">
        {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.HEADQUARTERS`) }}
      </h4>
      <div>{{ transaction.asset.nftToken.attributes.headquarters }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.WEBSITE`) }}</h4>
      <a :href="transaction.asset.nftToken.attributes.website">{{ transaction.asset.nftToken.attributes.website }}</a>
    </div>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import Fragment from "@/components/utils/Fragment.vue";
import { NFTService } from "@/services";

@Component({
  components: {
    Fragment,
  },
})
export default class NascarTeam extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  get nftService(): NFTService {
    return NFTService;
  }
}
</script>
