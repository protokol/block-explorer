<template>
  <div class="list-row-border-b">
    <div>
      <div class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.TOKEN_ATTRIBUTES`) }}</div>
      <vue-json-pretty style="margin-top: 16px;" :data="transaction.asset.nftToken.attributes" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import VueJsonPretty from "vue-json-pretty";

@Component({
  components: {
    VueJsonPretty,
  },
})
export default class Generic extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
