<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.NFT_CREATE`) }}
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="w-full lg:w-2/3">
        <InputText
          ref="collectionIdAsset"
          :value="collectionId"
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_CREATE.COLLECTION_ID`)"
          name="create-collectionId"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
    </div>

    <div class="flex flex-wrap justify-between mb-4">
      <p class="mb-4 mt-3">{{ $t(`SUBMIT_TRANSACTIONS.NFT_CREATE.ATTRIBUTES`) }}</p>
      <v-jsoneditor ref="editor" v-model="json" :options="jsonEditorOptions"></v-jsoneditor>
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
import axios from "axios";
import { ApiService, WalletService } from "@/services";
import { Identities } from "@arkecosystem/crypto";
import { Builders } from "@protokol/nft-base-crypto";
import VJsoneditor from "v-jsoneditor";
import PassphraseVFSubmit from "@/components/submit/Passphrase-VFSubmit.vue";

@Component({
  components: {
    VJsoneditor,
    PassphraseVFSubmit,
  },
})
export default class NFTCreateSubmit extends Vue {
  private collectionId = "";
  private json = {};

  private responseSuccess: string = null;
  private responseError: string = null;

  private jsonEditorOptions = { mode: "code" };

  public async mounted() {
    const schema = axios.get(
      "https://raw.githubusercontent.com/protokol/examples/develop/packages/hammer/src/data/assets/nascar/driver1.json",
    );
    const collectionId = ApiService.post("nft/collections/search", {
      name: "Nascar driver Collection",
    });

    this.json = (await schema).data;
    this.collectionId = (await collectionId).data[0].id;
  }

  private onInputChange(event: any): void {
    const { name, value } = event.target;

    if (name === "collectionId") {
      this.collectionId = value.toString();
    }
  }

  private async submitTransaction({ passphrase, vendorField }): Promise<void> {
    try {
      const nonce = await WalletService.fetchNextNonce(Identities.Address.fromPassphrase(passphrase));
      const transaction = new Builders.NFTCreateBuilder()
        .NFTCreateToken({
          collectionId: this.collectionId,
          attributes: JSON.parse(JSON.stringify(this.json)),
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
