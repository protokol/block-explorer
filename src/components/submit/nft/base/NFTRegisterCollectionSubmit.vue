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
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class NFTRegisterCollectionSubmit extends Vue {}
</script>
