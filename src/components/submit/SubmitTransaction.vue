<template>
  <Fragment>
    <section class="py-5 mb-5 page-section md:py-10">
      <div id="transactionForm" class="mx-5 mb-5 mb-10 sm:mx-10">
        <div class="flex flex-wrap justify-center mb-10">
          <div class="w-full md:w-1/2">
            <InputSelect
              :select-options="selectOptions"
              :label="$t('COMMON.TYPE')"
              :value="transactionType.key"
              name="Transaction Types"
              class="flex-1"
              @input="onTypeChange"
            />
          </div>
        </div>

        <CoreSubmit v-if="selectedTransactionGroup === getCoreGroup" :transaction-type="transactionType" />

        <NFTSubmit
          v-else-if="selectedTransactionGroup === getBaseGroup || selectedTransactionGroup === getExchangeGroup"
          :transaction-type="selectedTransactionType"
          :transaction-group="selectedTransactionGroup"
        />
      </div>
    </section>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CoreTransaction, NFTBaseTransactionTypes, NFTExchangeTransactionTypes, TypeGroupTransaction } from "@/enums";
import CoreSubmit from "@/components/submit/core/CoreSubmit.vue";
import NFTSubmit from "@/components/submit/nft/NFTSubmit.vue";
import { ITransactionType } from "@/interfaces";
import axios from "axios";
import { doc } from "prettier";
import group = doc.builders.group;

@Component({
  components: {
    NFTSubmit,
    CoreSubmit,
  },
})
export default class SubmitTransaction extends Vue {
  private transactionType: ITransactionType = { key: "ALL", type: -1 };

  private selectedTransactionType = -1;
  private selectedTransactionGroup = -1;

  get getCoreGroup() {
    return TypeGroupTransaction.CORE;
  }

  get getCoreTransactions() {
    return CoreTransaction;
  }

  get getBaseGroup() {
    return TypeGroupTransaction.NFT_BASE;
  }

  get getBaseTransactions() {
    return NFTBaseTransactionTypes;
  }

  get getExchangeGroup() {
    return TypeGroupTransaction.NFT_EXCHANGE;
  }

  get getExchangeTransactions() {
    return NFTExchangeTransactionTypes;
  }

  get selectOptions() {
    return this.types.map((type) => ({
      value: type.key,
      display: this.$t(`TRANSACTION.TYPES.${type.key}`),
    }));
  }

  get types() {
    return this.$store.getters["network/enabledTransactionTypes"];
  }

  private async onTypeChange(event: any) {
    // this.properties = { json: {}, passphrase: "" };
    // this.responseError = null;
    // this.responseSuccess = null;

    const index: number = this.types.findIndex((transaction) => transaction.key === event.target.value);
    const { type, typeGroup, asset } = this.types[index];
    this.selectedTransactionType = type;
    this.selectedTransactionGroup = typeGroup;

    // this.selectedTransactionType = 0;
    //
    // if (type === -1) {
    //   this.selectedTransactionType = -1;
    // }
    // if (typeGroup === 1 && type === 0) {
    //   this.selectedTransactionType = 1;
    // }
    // if (typeGroup === 9000 && type === 0) {
    //   const schema = axios.get(
    //     "https://raw.githubusercontent.com/protokol/examples/develop/packages/hammer/src/data/collections/nascar-collection.json",
    //   );
    //   this.selectedTransactionType = 2;
    //   this.properties["json"] = (await schema).data.jsonSchema;
    //
    //   this.collectionName = "Nascar driver Collection";
    //   this.properties["name"] = this.collectionName;
    // }
    // if (typeGroup === 9000 && type === 1) {
    //   const schema = axios.get(
    //     "https://raw.githubusercontent.com/protokol/examples/develop/packages/hammer/src/data/assets/nascar/driver1.json",
    //   );
    //   const collectionId = this.apiService.post("nft/collections/search", {
    //     name: "Nascar driver Collection",
    //   });
    //   this.selectedTransactionType = 3;
    //
    //   this.properties["json"] = (await schema).data;
    //
    //   this.collectionIdAsset = (await collectionId).data[0].id;
    //   this.properties["collectionId"] = this.collectionIdAsset;
    // }
    // if (typeGroup === 9000 && type === 3) {
    //   this.selectedTransactionType = 4;
    // }
    // if (typeGroup === 9000 && type === 2) {
    //   this.selectedTransactionType = 5;
    // }
    // if (typeGroup === 9001 && type === 0) {
    //   this.selectedTransactionType = 6;
    // }
    // if (typeGroup === 9001 && type === 1) {
    //   this.selectedTransactionType = 7;
    // }
    // if (typeGroup === 9001 && type === 2) {
    //   this.selectedTransactionType = 8;
    // }
    // if (typeGroup === 9001 && type === 3) {
    //   this.selectedTransactionType = 9;
    // }
    // if (typeGroup === 9001 && type === 4) {
    //   this.selectedTransactionType = 10;
    // }
    //
    // this.properties["passphrase"] = this.$store.getters["network/passphrase"];
  }
}
</script>
