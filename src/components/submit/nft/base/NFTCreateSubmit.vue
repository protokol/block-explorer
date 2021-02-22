<template>
  <div class="mx-5 mb-5 mb-10 sm:mx-10">
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

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class NFTCreateSubmit extends Vue {}
</script>
