<template>
  <section class="py-5 mb-5 page-section md:py-10">
    <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.GUARDIAN_SET_USER_PERMISSIONS.USER_PERMISSIONS`) }}</h3>
    <br />
    <div class="px-5 sm:px-10">
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_USER_PERMISSIONS.WALLET`) }}</div>
        <LinkWallet :trunc="false" :address="addressFromPublicKey(transaction.asset.setUserPermissions.publicKey)" />
      </div>
      <div class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_USER_PERMISSIONS.GROUPS`) }}</div>
        <div>
          <div v-for="value in transaction.asset.setUserPermissions.groupNames" :key="value">
            {{ value }}
          </div>
        </div>
      </div>
      <div v-if="transaction.asset.setUserPermissions.allow" class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_USER_PERMISSIONS.ALLOWED_TRANSACTIONS`) }}</div>
        <div>
          <div v-for="value in transaction.asset.setUserPermissions.allow" :key="value">
            {{ $t(`TRANSACTION.TYPES.${transactionTypeKey(value.transactionTypeGroup, value.transactionType)}`) }}
          </div>
        </div>
      </div>
      <div v-if="transaction.asset.setUserPermissions.deny" class="list-row-border-b">
        <div class="mr-4">{{ $t(`TRANSACTION.GUARDIAN_SET_USER_PERMISSIONS.DENIED_TRANSACTIONS`) }}</div>
        <div>
          <div v-for="value in transaction.asset.setUserPermissions.deny" :key="value">
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
export default class UserPermissions extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;
}
</script>
