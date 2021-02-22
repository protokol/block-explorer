<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.NFT_AUCTION`) }}
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="w-full lg:w-3/4">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION.NFT_IDS`)"
          name="ids"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-start">
      <div class="w-full lg:w-1/4 md:w-1/2">
        <InputNumber
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION.START_AMOUNT`)"
          name="startingAmount"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
      <div class="w-full lg:w-1/4 md:w-1/2">
        <InputNumber
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION.BLOCK_EXPIRATION`)"
          name="blockExpiration"
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
import { Identities } from "@arkecosystem/crypto";
import { Builders } from "@protokol/nft-exchange-crypto";
import { Utils } from "@arkecosystem/crypto";

@Component({
  components: {
    PassphraseVFSubmit,
  },
})
export default class NFTAuctionSubmit extends Vue {
  private ids: string[] = [];
  private startingAmount: number;
  private blockExpiration: number;

  private responseSuccess: string = null;
  private responseError: string = null;

  private onInputChange(event: any): void {
    const { name, value } = event.target;

    if (name === "ids") {
      this.ids = value.toString().split(",");
    } else if (name === "startingAmount") {
      this.startingAmount = +value;
    } else if (name === "blockExpiration") {
      this.blockExpiration = +value;
    }
  }

  private async submitTransaction({ passphrase, vendorField }): Promise<void> {
    try {
      const nonce = await WalletService.fetchNextNonce(Identities.Address.fromPassphrase(passphrase));
      const transaction = new Builders.NFTAuctionBuilder()
        .NFTAuctionAsset({
          nftIds: this.ids,
          startAmount: Utils.BigNumber.make(this.startingAmount),
          expiration: {
            blockHeight: this.blockExpiration,
          },
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
