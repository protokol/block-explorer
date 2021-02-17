<template>
  <Fragment>
    <br />
    <h3 class="mb-4">
      {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.COLLECTION_NAME`) }}
    </h3>
    <div class="list-row-border-b">
      <h4 class="mr-4">
        {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.LOCATION`) }}
      </h4>
      <div>{{ transaction.asset.nftToken.attributes.issuedLocation }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.ipfsHashImageFront" class="list-row-border-b">
      <h4 class="mr-4">
        {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.HERO_CARD_FRONT`) }}
      </h4>
      <img :src="nftService.getImage(transaction.asset.nftToken.attributes.ipfsHashImageFront)" alt="" />
    </div>
    <div v-if="transaction.asset.nftToken.attributes.ipfsHashImageBack" class="list-row-border-b">
      <h4 class="mr-4">
        {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.HERO_CARD_BACK`) }}
      </h4>
      <img :src="nftService.getImage(transaction.asset.nftToken.attributes.ipfsHashImageBack)" alt="" />
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.DATE`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.issuedDate }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">
        {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.IS_SIGNED`) }}
      </h4>
      <div>{{ transaction.asset.nftToken.attributes.signed }}</div>
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
export default class NascarHeroCards extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  private nftService = NFTService;
}
</script>
