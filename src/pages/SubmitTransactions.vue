<template>
  <div class="max-w-2xl mx-auto md:pt-5">
    <ContentHeader>{{ "Submit Transactions" }}</ContentHeader>

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

        <div v-if="selectedTransactionType === 1" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.TRANSFER`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-2/3">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.TRANSFER.RECIPIENT`)"
                name="transfer-recipient"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>

            <div class="w-full lg:w-1/3 sm:w-1/2 md:w-1/2">
              <InputNumber
                :label="$t(`SUBMIT_TRANSACTIONS.TRANSFER.AMOUNT`)"
                name="transfer-amount"
                class="mr-10 my-2"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 2" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.NFT_REGISTER_COLLECTION`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-2/3">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.NAME`)"
                :value="collectionName"
                name="registerCollection-name"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>

            <div class="w-full lg:w-1/3 sm:w-1/2 md:w-1/2">
              <InputNumber
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.AMOUNT`)"
                name="registerCollection-amount"
                class="mr-10 my-2"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.DESCRIPTION`)"
                name="registerCollection-description"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between">
            <p class="mb-4 mt-3">{{ $t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.SCHEMA`) }}</p>
            <v-jsoneditor ref="editor" v-model="properties['json']" :options="jsonEditorOptions"></v-jsoneditor>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full lg:w-2/3">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_REGISTER_COLLECTION.ALLOWED_ISSUERS`)"
                name="registerCollection-allowedIssuers"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 3" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.NFT_CREATE`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-2/3">
              <InputText
                ref="collectionIdAsset"
                :value="collectionIdAsset"
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_CREATE.COLLECTION_ID`)"
                name="create-collectionId"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>

          <div class="flex flex-wrap justify-between mb-4">
            <p class="mb-4 mt-3">{{ $t(`SUBMIT_TRANSACTIONS.NFT_CREATE.ATTRIBUTES`) }}</p>
            <v-jsoneditor ref="editor" v-model="properties['json']" :options="jsonEditorOptions"></v-jsoneditor>
          </div>

          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 4" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.NFT_BURN`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-3/4">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_BURN.NFT_ID`)"
                name="nft-burn-id"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 5" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.NFT_TRANSFER`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-3/4">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_TRANSFER.NFT_IDS`)"
                name="nft-transfer-ids"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-2/3">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.TRANSFER.RECIPIENT`)"
                name="nft-transfer-recipient"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 6" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.NFT_AUCTION`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-3/4">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION.NFT_IDS`)"
                name="nft-auction-ids"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-start">
            <div class="w-full lg:w-1/4 md:w-1/2">
              <InputNumber
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION.START_AMOUNT`)"
                name="nft-auction-startingAmount"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
            <div class="w-full lg:w-1/4 md:w-1/2">
              <InputNumber
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION.BLOCK_EXPIRATION`)"
                name="nft-auction-blockExpiration"
                class="mr-10 my-2"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 7" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.NFT_AUCTION_CANCEL`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-3/4">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_AUCTION_CANCEL.AUCTION_ID`)"
                name="nft-auctionCancel-auctionId"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 8" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.NFT_BID`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-3/4">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_BID.AUCTION_ID`)"
                name="nft-bid-auctionId"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
            <div class="w-full md:w-1/4">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_BID.AMOUNT`)"
                name="nft-bid-amount"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 9" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.NFT_BID_CANCEL`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-3/4">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_BID_CANCEL.BID_ID`)"
                name="nft-bidCancel-bidId"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 10" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold">
            {{ $t(`TRANSACTION.TYPES.NFT_ACCEPT_TRADE`) }}
          </p>
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-3/4">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_ACCEPT_TRADE.AUCTION_ID`)"
                name="nft-acceptTrade-auctionId"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-3/4">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.NFT_ACCEPT_TRADE.BID_ID`)"
                name="nft-acceptTrade-bidId"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.VENDORFIELD`)"
                name="vendorField"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between mb-4">
            <div class="w-full">
              <InputText
                :label="$t(`SUBMIT_TRANSACTIONS.PASSPHRASE`)"
                :value="properties['passphrase']"
                name="passphrase"
                class="mr-8 my-3"
                @input="onInputChange"
              />
            </div>
          </div>
        </div>

        <div v-if="selectedTransactionType === 0" class="mx-5 mb-5 mb-10 sm:mx-10">
          <p class="mb-2 mt-4 font-bold text-center">
            {{ "This transaction type is not supported" }}
          </p>
        </div>
      </div>

      <button v-if="selectedTransactionType !== 0 && selectedTransactionType !== -1" class="button-lg" @click="submit">
        Submit Transaction
      </button>

      <div v-if="responseSuccess !== null" class="flex flex-wrap justify-center mt-6 mb-8">
        <div class="w-full md:w-1/2">
          <h3 class="text-center">Transaction was submitted successfully</h3>
          <LinkTransaction :id="responseSuccess" :truncate-id="false" class="justify-center" />
        </div>
      </div>
      <div v-if="responseError !== null" class="flex flex-wrap justify-center mt-6 mb-8">
        <div class="w-full md:w-1/2">
          <h3 class="text-center text-red">Something went wrong while submitting transactions</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { Transactions, Identities, Utils, Interfaces } from "@arkecosystem/crypto";
import { Builders } from "@protokol/nft-base-crypto";
import { Builders as NFTExchangeBuilders } from "@protokol/nft-exchange-crypto";
import { ApiService } from "@/services";
import { ITransactionType } from "@/interfaces";
import VJsoneditor from "v-jsoneditor";
import axios from "axios";

@Component({
  computed: {
    ...mapGetters("ui", ["nightMode"]),
    ...mapGetters("network", ["passphrase"]),
    ...mapActions("network", ["setPassphrase"]),
  },
  components: {
    VJsoneditor,
  },
})
export default class SubmitTransactionsPage extends Vue {
  private nightMode: boolean;

  private transactionType: ITransactionType = { key: "ALL", type: -1 };
  private selectedTransactionType = -1;
  private apiService = ApiService;

  private properties: object = {};
  private responseSuccess: string = null;
  private responseError: string = null;

  private jsonEditorOptions = { mode: "code" };

  private collectionName: string = null;
  private collectionIdAsset: string = null;

  public mounted(): void {
    this.$store.dispatch("network/setPassphrase", localStorage.getItem("passphrase"));
  }

  private async submit(): Promise<void> {
    try {
      this.$store.dispatch("network/setPassphrase", this.properties["passphrase"]);

      const address = Identities.Address.fromPassphrase(this.properties["passphrase"]);
      const nonce = await this.fetchNextNonce(address);
      let transaction;
      if (this.selectedTransactionType === 1) {
        transaction = Transactions.BuilderFactory.transfer()
          .version(2)
          .recipientId(this.properties["recipient"])
          .amount(this.properties["amount"]);
      }
      if (this.selectedTransactionType === 2) {
        transaction = new Builders.NFTRegisterCollectionBuilder().NFTRegisterCollectionAsset({
          name: this.properties["name"],
          description: this.properties["description"],
          maximumSupply: this.properties["assetAmount"],
          jsonSchema: JSON.parse(JSON.stringify(this.properties["json"])),
          allowedIssuers: this.properties["allowedIssuers"],
        });
      }
      if (this.selectedTransactionType === 3) {
        transaction = new Builders.NFTCreateBuilder().NFTCreateToken({
          collectionId: this.properties["collectionId"],
          attributes: JSON.parse(JSON.stringify(this.properties["json"])),
        });
      }
      if (this.selectedTransactionType === 4) {
        transaction = new Builders.NFTBurnBuilder().NFTBurnAsset({ nftId: this.properties["nftId"] });
      }
      if (this.selectedTransactionType === 5) {
        transaction = new Builders.NFTTransferBuilder().NFTTransferAsset({
          nftIds: this.properties["nftIds"],
          recipientId: this.properties["recipient"],
        });
      }
      if (this.selectedTransactionType === 6) {
        transaction = new NFTExchangeBuilders.NFTAuctionBuilder().NFTAuctionAsset({
          nftIds: this.properties["nftIds"],
          startAmount: this.properties["startAmount"],
          expiration: {
            blockHeight: this.properties["expiration"],
          },
        });
      }
      if (this.selectedTransactionType === 7) {
        transaction = new NFTExchangeBuilders.NFTAuctionCancelBuilder().NFTAuctionCancelAsset({
          auctionId: this.properties["auction"],
        });
      }
      if (this.selectedTransactionType === 8) {
        transaction = new NFTExchangeBuilders.NFTBidBuilder().NFTBidAsset({
          auctionId: this.properties["auction"],
          bidAmount: Utils.BigNumber.make(this.properties["amount"]),
        });
      }
      if (this.selectedTransactionType === 9) {
        transaction = new NFTExchangeBuilders.NFTBidCancelBuilder().NFTBidCancelAsset({
          bidId: this.properties["bid"],
        });
      }
      if (this.selectedTransactionType === 10) {
        transaction = new NFTExchangeBuilders.NftAcceptTradeBuilder().NFTAcceptTradeAsset({
          auctionId: this.properties["auction"],
          bidId: this.properties["bid"],
        });
      }

      transaction.nonce(nonce).vendorField(this.properties["vendorField"]);

      transaction.sign(this.properties["passphrase"]);
      this.postTransaction(transaction.getStruct());
    } catch (e) {
      console.log(e);
      this.responseError = "Error while constructing transaction";
    }
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

  private async fetchNextNonce(address: string): Promise<string> {
    const wallet = await this.apiService.get(`wallets/${address}`);
    const nonce = Utils.BigNumber.make(wallet.data.nonce).plus("1");
    return nonce.toFixed();
  }

  private async postTransaction(transaction: Interfaces.ITransactionData) {
    try {
      const broadcastResponse = await this.apiService.post("transactions", { transactions: [transaction] });

      if (broadcastResponse.data.accept[0]) {
        this.responseSuccess = broadcastResponse.data.accept[0];
        this.responseError = null;
      }
      if (broadcastResponse.data.invalid[0]) {
        this.responseError = broadcastResponse.data.invalid[0];
        this.responseSuccess = null;
      }
    } catch {
      this.responseError = "404 Error";
      this.responseSuccess = null;
    }
  }

  private async onTypeChange(event: any) {
    this.properties = { json: {}, passphrase: "" };
    this.responseError = null;
    this.responseSuccess = null;

    const index: number = this.types.findIndex((transaction) => transaction.key === event.target.value);
    const { type, typeGroup, asset } = this.types[index];
    this.selectedTransactionType = 0;

    if (type === -1) {
      this.selectedTransactionType = -1;
    }
    if (typeGroup === 1 && type === 0) {
      this.selectedTransactionType = 1;
    }
    if (typeGroup === 9000 && type === 0) {
      const schema = axios.get(
        "https://raw.githubusercontent.com/protokol/examples/develop/packages/hammer/src/data/collections/nascar-collection.json",
      );
      this.selectedTransactionType = 2;
      this.properties["json"] = (await schema).data.jsonSchema;

      this.collectionName = "Nascar driver Collection";
      this.properties["name"] = this.collectionName;
    }
    if (typeGroup === 9000 && type === 1) {
      const schema = axios.get(
        "https://raw.githubusercontent.com/protokol/examples/develop/packages/hammer/src/data/assets/nascar/driver1.json",
      );
      const collectionId = this.apiService.post("nft/collections/search", {
        name: "Nascar driver Collection",
      });
      this.selectedTransactionType = 3;

      this.properties["json"] = (await schema).data;

      this.collectionIdAsset = (await collectionId).data[0].id;
      this.properties["collectionId"] = this.collectionIdAsset;
    }
    if (typeGroup === 9000 && type === 3) {
      this.selectedTransactionType = 4;
    }
    if (typeGroup === 9000 && type === 2) {
      this.selectedTransactionType = 5;
    }
    if (typeGroup === 9001 && type === 0) {
      this.selectedTransactionType = 6;
    }
    if (typeGroup === 9001 && type === 1) {
      this.selectedTransactionType = 7;
    }
    if (typeGroup === 9001 && type === 2) {
      this.selectedTransactionType = 8;
    }
    if (typeGroup === 9001 && type === 3) {
      this.selectedTransactionType = 9;
    }
    if (typeGroup === 9001 && type === 4) {
      this.selectedTransactionType = 10;
    }

    this.properties["passphrase"] = this.$store.getters["network/passphrase"];
  }

  private onInputChange(event: any) {
    const { name, value } = event.target;
    if (name === "transfer-recipient") {
      this.properties["recipient"] = value.toString();
    }
    if (name === "transfer-amount") {
      this.properties["amount"] = value.toString();
    }
    if (name === "vendorField") {
      this.properties["vendorField"] = value.toString();
    }
    if (name === "passphrase") {
      this.properties["passphrase"] = value.toString();
    }
    if (name === "nft-transfer-ids") {
      this.properties["nftIds"] = value.toString().split(",");
    }
    if (name === "nft-transfer-recipient") {
      this.properties["recipient"] = value.toString();
    }
    if (name === "nft-burn-id") {
      this.properties["nftId"] = value.toString();
    }
    if (name === "nft-auction-ids") {
      this.properties["nftIds"] = value.toString().split(",");
    }
    if (name === "nft-auction-startingAmount") {
      this.properties["startAmount"] = +value;
    }
    if (name === "nft-auction-blockExpiration") {
      this.properties["expiration"] = +value;
    }
    if (name === "nft-auctionCancel-auctionId") {
      this.properties["auction"] = value.toString();
    }
    if (name === "nft-bid-auctionId") {
      this.properties["auction"] = value.toString();
    }
    if (name === "nft-bid-amount") {
      this.properties["amount"] = value.toString();
    }
    if (name === "nft-bidCancel-bidId") {
      this.properties["bid"] = value.toString();
    }
    if (name === "nft-acceptTrade-auctionId") {
      this.properties["auction"] = value.toString();
    }
    if (name === "nft-acceptTrade-bidId") {
      this.properties["bid"] = value.toString();
    }
    if (name === "registerCollection-name") {
      this.properties["name"] = value.toString();
    }
    if (name === "registerCollection-amount") {
      this.properties["assetAmount"] = +value;
    }
    if (name === "registerCollection-description") {
      this.properties["description"] = value.toString();
    }
    if (name === "registerCollection-allowedIssuers") {
      this.properties["allowedIssuers"] = value.toString().split(",");
    }
    if (name === "create-collectionId") {
      this.properties["collectionId"] = value.toString();
    }
  }
}
</script>
