<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.NFT_BURN`) }}
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="w-full lg:w-3/4">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_BURN.NFT_ID`)"
          name="id"
          class="mr-8 my-3"
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
import { ApiService, WalletService } from "@/services";
import { Identities } from "@arkecosystem/crypto";
import { Builders } from "@protokol/nft-base-crypto";
import PassphraseVFSubmit from "@/components/submit/Passphrase-VFSubmit.vue";

@Component({
  components: {
    PassphraseVFSubmit,
  },
})
export default class NFTBurnSubmit extends Vue {
  private id = "";

  private responseSuccess: string = null;
  private responseError: string = null;

  private onInputChange(event: any): void {
    const { name, value } = event.target;

    if (name === "id") {
      this.id = value.toString();
    }
  }

  private async submitTransaction({ passphrase, vendorField }): Promise<void> {
    try {
      const nonce = await WalletService.fetchNextNonce(Identities.Address.fromPassphrase(passphrase));
      const transaction = new Builders.NFTBurnBuilder()
        .NFTBurnAsset({
          nftId: this.id,
        })
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
