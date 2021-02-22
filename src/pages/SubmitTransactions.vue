<template>
  <div class="max-w-2xl mx-auto md:pt-5">
    <ContentHeader>{{ "Submit Transactions" }}</ContentHeader>

    <SubmitTransaction />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import SubmitTransaction from "@/components/submit/SubmitTransaction.vue";

@Component({
  computed: {
    ...mapGetters("ui", ["nightMode"]),
    ...mapGetters("network", ["passphrase"]),
    ...mapActions("network", ["setPassphrase"]),
  },
  components: {
    SubmitTransaction,
  },
})
export default class SubmitTransactionsPage extends Vue {
  private nightMode: boolean;
}
</script>
