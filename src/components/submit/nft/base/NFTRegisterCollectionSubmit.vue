<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
    <p class="mb-2 mt-4 font-bold">
      {{ $t(`TRANSACTION.TYPES.NFT_REGISTER_COLLECTION`) }}
    </p>
    <div class="flex flex-wrap justify-between">
      <div class="w-full lg:w-2/3">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.NAME`)"
          :value="collectionName"
          name="collectionName"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>

      <div class="w-full lg:w-1/3 sm:w-1/2 md:w-1/2">
        <InputNumber
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.AMOUNT`)"
          name="amount"
          class="mr-10 my-2"
          @input="onInputChange"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="w-full">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.DESCRIPTION`)"
          name="description"
          class="mr-8 my-3"
          @input="onInputChange"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <p class="mb-4 mt-3">{{ $t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.SCHEMA`) }}</p>
      <v-jsoneditor ref="editor" v-model="json" :options="jsonEditorOptions"></v-jsoneditor>
    </div>
    <div class="flex flex-wrap justify-between mb-4">
      <div class="w-full lg:w-2/3">
        <InputText
          :label="$t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.ALLOWED_ISSUERS`)"
          name="allowedIssuers"
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
import VJsoneditor from "v-jsoneditor";
import PassphraseVFSubmit from "@/components/submit/Passphrase-VFSubmit.vue";
import axios from "axios";
import { Builders } from "@protokol/nft-base-crypto";
import { ApiService, WalletService } from "@/services";
import { Identities } from "@arkecosystem/crypto";

@Component({
  components: {
    PassphraseVFSubmit,
    VJsoneditor,
  },
})
export default class NFTRegisterCollectionSubmit extends Vue {
  private collectionName = "";
  private amount: number;
  private description = "";
  private json = {};
  private allowedIssuers: string[] = [];

  private responseSuccess: string = null;
  private responseError: string = null;

  private jsonEditorOptions = { mode: "code" };

  public async mounted() {
    const schema = await axios.get(
      "https://raw.githubusercontent.com/protokol/examples/develop/packages/hammer/src/data/collections/nascar-collection.json",
    );
    this.json = schema.data.jsonSchema;
    this.collectionName = schema.data.name;
  }

  private onInputChange(event: any): void {
    const { name, value } = event.target;

    if (name === "collectionName") {
      this.collectionName = value.toString();
    } else if (name === "amount") {
      this.amount = +value;
    } else if (name === "description") {
      this.description = value.toString();
    } else if (name === "allowedIssuers") {
      this.allowedIssuers = value.toString().split(",");
    }
  }

  private async submitTransaction({ passphrase, vendorField }): Promise<void> {
    try {
      const nonce = await WalletService.fetchNextNonce(Identities.Address.fromPassphrase(passphrase));
      const transaction = new Builders.NFTRegisterCollectionBuilder()
        .NFTRegisterCollectionAsset({
          name: this.collectionName,
          description: this.description,
          maximumSupply: this.amount,
          jsonSchema: JSON.parse(JSON.stringify(this.json)),
          allowedIssuers: this.allowedIssuers.length > 0 ? this.allowedIssuers : undefined,
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
