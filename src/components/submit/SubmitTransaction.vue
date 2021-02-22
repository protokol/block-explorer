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

        <CoreSubmit v-if="transactionGroup === getCoreGroup" :transaction-type="transactionType" />

        <NFTSubmit
          v-else-if="transactionGroup === getBaseGroup || transactionGroup === getExchangeGroup"
          :transaction-type="transactionType"
          :transaction-group="transactionGroup"
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

@Component({
  components: {
    NFTSubmit,
    CoreSubmit,
  },
})
export default class SubmitTransaction extends Vue {
  @Prop({ required: true })
  private transactionGroup: number;

  @Prop({ required: true })
  private transactionType: number;

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

  private emitInput(value: object) {
    this.$emit("formChange", value);
  }

  private async search({ name, value }): Promise<void> {
    this.emitInput({ name, value });
  }
}
</script>
