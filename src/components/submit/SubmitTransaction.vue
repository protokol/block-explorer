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

        <NotSupportedSubmit v-else-if="selectedTransactionGroup !== -1" />
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
import NotSupportedSubmit from "@/components/submit/NotSupportedSubmit.vue";

@Component({
  components: {
    NotSupportedSubmit,
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
    const index: number = this.types.findIndex((transaction) => transaction.key === event.target.value);
    const { type, typeGroup, asset } = this.types[index];
    this.selectedTransactionType = type;
    this.selectedTransactionGroup = typeGroup;
  }
}
</script>
