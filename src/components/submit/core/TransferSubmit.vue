<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.TRANSFER`) }}
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="w-full lg:w-2/3">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.TRANSFER.RECIPIENT`)"
          name="recipient"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>

      <div class="w-full lg:w-1/3 sm:w-1/2 md:w-1/2">
        <InputNumber
          :label="$t(`SUBMIT_TRANSACTIONS.TRANSFER.AMOUNT`)"
          name="amount"
          class="mr-10 my-2"
          @input="onInputChange"
        />
      </div>
    </div>

    <PassphraseVFSubmit
      :response-success="responseSuccess"
      :response-error="responseError"
      @submit="submitTransaction"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PassphraseVFSubmit from "@/components/submit/Passphrase-VFSubmit.vue";
import { ApiService, WalletService } from "@/services";
import { Identities, Transactions } from "@arkecosystem/crypto";

@Component({
  components: {
    PassphraseVFSubmit,
  },
})
export default class TransferSubmit extends Vue {
  private recipient = "";
  private amount: number;

  private responseSuccess: string = null;
  private responseError: string = null;

  private onInputChange(event: any): void {
    const { name, value } = event.target;

    if (name === "recipient") {
      this.recipient = value.toString();
    } else if (name === "amount") {
      this.amount = +value;
    }
  }

  private async submitTransaction({ passphrase, vendorField }): Promise<void> {
    try {
      const nonce = await WalletService.fetchNextNonce(Identities.Address.fromPassphrase(passphrase));
      const transaction = Transactions.BuilderFactory.transfer()
        .recipientId(this.recipient)
        .amount(this.amount.toString())
        .nonce(nonce)
        .vendorField(vendorField)
        .sign(passphrase);

      const broadcastResponse = await ApiService.post("transactions", { transactions: [transaction.getStruct()] });

      if (broadcastResponse.data.accept.length > 0) {
        this.responseSuccess = broadcastResponse.data.accept[0];
      } else {
        this.responseError = "Something went wrong";
      }
    } catch {
      this.responseError = "Something went wrong";
    }
  }
}
</script>
