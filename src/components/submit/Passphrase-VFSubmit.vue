<template>
  <Fragment>
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

    <button class="button-lg" @click="submit">
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
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class PassphraseVFSubmit extends Vue {}
</script>
