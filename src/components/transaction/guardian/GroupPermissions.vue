<template>
  <section class="py-5 mb-5 page-section md:py-10">
    <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.GUARDIAN_SET_GROUP_PERMISSIONS.GROUP_PERMISSIONS`) }}</h3>
    <br />
    <div class="px-5 sm:px-10">
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_GROUP_PERMISSIONS.NAME`) }}</div>
        <div class="overflow-hidden break-all">{{ transaction.asset.setGroupPermissions.name }}</div>
      </div>
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_GROUP_PERMISSIONS.ACTIVE`) }}</div>
        <div class="overflow-hidden break-all">{{ transaction.asset.setGroupPermissions.active }}</div>
      </div>
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_GROUP_PERMISSIONS.DEFAULT`) }}</div>
        <div class="overflow-hidden break-all">{{ transaction.asset.setGroupPermissions.default }}</div>
      </div>
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_GROUP_PERMISSIONS.PRIORITY`) }}</div>
        <div class="overflow-hidden break-all">{{ transaction.asset.setGroupPermissions.priority }}</div>
      </div>
      <div v-if="transaction.asset.setGroupPermissions.allow" class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_GROUP_PERMISSIONS.ALLOWED_TRANSACTIONS`) }}</div>
        <div>
          <div v-for="value in transaction.asset.setGroupPermissions.allow" :key="value">
            {{ $t(`TRANSACTION.TYPES.${transactionTypeKey(value.transactionTypeGroup, value.transactionType)}`) }}
          </div>
        </div>
      </div>
      <div v-if="transaction.asset.setGroupPermissions.deny" class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_GROUP_PERMISSIONS.DENIED_TRANSACTIONS`) }}</div>
        <div>
          <div v-for="value in transaction.asset.setGroupPermissions.deny" :key="value">
            {{ $t(`TRANSACTION.TYPES.${transactionTypeKey(value.transactionTypeGroup, value.transactionType)}`) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";

@Component
export default class GroupPermissions extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
