<template>
  <Fragment>

  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import VueJsonPretty from "vue-json-pretty";
import Fragment from "@/components/utils/Fragment.vue";

@Component({
  components: {
    VueJsonPretty,
    Fragment,
  },
})
export default class NFTTransfer extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
