<template>
  <Fragment>
    <template v-if="transaction.typeGroup === 9000">
      <NFTRegisterCollection v-if="transaction.type === 0" :transaction="transaction" />
      <NFTCreate v-if="transaction.type === 1" :transaction="transaction" />
    </template>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import { TypeGroupTransaction } from "@/enums";
import VueJsonPretty from "vue-json-pretty";
import { ApiService, NFTService } from "@/services";
import NFTRegisterCollection from "@/components/transaction/nft/base/NFTRegisterCollection.vue";
import NFTCreate from "@/components/transaction/nft/base/NFTCreate.vue";

@Component({
  components: {
    NFTCreate,
    NFTRegisterCollection,
    VueJsonPretty,
  },
})
export default class NFTDetails extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  private NFTBase = TypeGroupTransaction.NFT_BASE;
  private NFTExchange = TypeGroupTransaction.NFT_EXCHANGE;

  private collectionName = "";

  beforeCreate() {
    console.log("before create");
  }
  created() {
    console.log("created");
  }

  beforeMount() {
    console.log("beforeMount");
  }

  public async mounted() {
    console.log("mounted");
    if (this.transaction.typeGroup === 9000 && this.transaction.type === 1) {
      this.getCollection(this.transaction.asset.nftToken.collectionId);
    }
  }

  private async getCollection(id: string) {
    return (await NFTService.getCollection(id)).name;
  }
}
</script>
