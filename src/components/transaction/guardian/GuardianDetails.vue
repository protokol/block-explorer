<template>
  <Fragment>
    <GroupPermissions
      v-if="transaction.type === guardianTransactions.GUARDIAN_SET_GROUP_PERMISSIONS"
      :transaction="transaction"
    />
    <UserPermissions
      v-else-if="transaction.type === guardianTransactions.GUARDIAN_SET_USER_PERMISSIONS"
      :transaction="transaction"
    />
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import { GuardianTransactionTypes } from "@/enums";
import GroupPermissions from "@/components/transaction/guardian/GroupPermissions.vue";
import UserPermissions from "@/components/transaction/guardian/UserPermissions.vue";
@Component({
  components: { UserPermissions, GroupPermissions },
})
export default class GuardianDetails extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  get guardianTransactions() {
    return GuardianTransactionTypes;
  }
}
</script>
