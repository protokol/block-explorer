<template>
  <Fragment>
    <br />
    <h3 class="mb-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.COLLECTION_NAME`) }}</h3>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.NAME`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.name }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4 mb-2">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.DESCRIPTION`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.description }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.SERIAL_NUMBER`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.serialNumber }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.CALIBER`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.caliber }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.LENGTH`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.length }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.HEIGHT`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.height }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.WIDTH`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.width }}</div>
    </div>
    <div class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.BARREL_LENGTH`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.barrelLength }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.weight" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.WEIGHT`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.weight }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.weightWithMag" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.WEIGHT_WITH_MAG`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.weightWithMag }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.frameColors" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.FRAME_COLORS`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.frameColors }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.slide" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.SLIDE`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.slide }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.slights" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.SLIGHTS`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.slights }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.frame" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.FRAME`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.frame }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.firingPinSafety" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.FIRING_PIN_SAFETY`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.firingPinSafety }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.triggerSafety" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.TRIGGER_SAFETY`) }}</h4>
      <div>{{ transaction.asset.nftToken.attributes.triggerSafety }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.ambidextrousManualSafety" class="list-row-border-b">
      <h4 class="mr-4">
        {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.AMBIDEXTROUS_MANUAL_SAFETY`) }}
      </h4>
      <div>{{ transaction.asset.nftToken.attributes.ambidextrousManualSafety }}</div>
    </div>
    <div v-if="transaction.asset.nftToken.attributes.ipfsImageHash" class="list-row-border-b">
      <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.IMAGE`) }}</h4>
      <img
        :alt="transaction.asset.nftToken.attributes.name"
        :src="nftService.getImage(transaction.asset.nftToken.attributes.ipfsImageHash)"
      />
    </div>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import { NFTService } from "@/services";

@Component
export default class AREX extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  get nftService() {
    return NFTService;
  }
}
</script>
