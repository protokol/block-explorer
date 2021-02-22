<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.NFT_BID`) }}
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="w-full md:w-3/4">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_BID.AUCTION_ID`)"
          name="auctionId"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
      <div class="w-full md:w-1/4">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_BID.AMOUNT`)"
          name="amount"
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
import { Identities, Utils } from "@arkecosystem/crypto";
import { Builders } from "@protokol/nft-exchange-crypto";
import PassphraseVFSubmit from "@/components/submit/Passphrase-VFSubmit.vue";

@Component({
  components: {
    PassphraseVFSubmit,
  },
})
export default class NFTBidSubmit extends Vue {
  private auctionId = "";
  private amount: number;

  private responseSuccess: string = null;
  private responseError: string = null;

  private onInputChange(event: any): void {
    const { name, value } = event.target;

    if (name === "auctionId") {
      this.auctionId = value.toString();
    } else if (name === "amount") {
      this.amount = +value;
    }
  }

  private async submitTransaction({ passphrase, vendorField }): Promise<void> {
    try {
      const nonce = await WalletService.fetchNextNonce(Identities.Address.fromPassphrase(passphrase));
      const transaction = new Builders.NFTBidBuilder()
        .NFTBidAsset({
          auctionId: this.auctionId,
          bidAmount: Utils.BigNumber.make(this.amount),
        })
        .nonce(nonce)
        .vendorField(vendorField)
        .sign(passphrase);

      const broadcastResponse = await ApiService.post("transactions", { transactions: [transaction.getStruct()] });

      this.response = broadcastResponse.data;
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
